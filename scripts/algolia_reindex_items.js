
// required env variables
['AlgoliaAppID', 'AlgoliaAPIKey', 'OpenATIndexName']
  .forEach((name) => {
    if (!process.env[name]){
      console.error(`Error ${name} env var not found`);
      process.exit(-1);
    }
  });

if(process.argv.length != 3) {
  console.log("Usage: algolia_reindex_items.js <items-directory>");
  process.exit(0);
}
const marked = require('marked')
const htmlsave = require('htmlsave')
const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const helper = require('./helper')
const algoliasearch = require('algoliasearch')

let client = algoliasearch(process.env.AlgoliaAppID, process.env.AlgoliaAPIKey, { timeout: 2 * 60 * 1000 }) // two minutes
let index = client.initIndex(process.env.OpenATIndexName)

let items_dir = fs.realpathSync(process.argv[2]);
let targetext = ".md";
let read_concurrent_length = 10;
let index_batch_limit = 1000;


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

/*
 * required fields
 * - title
 * - link
 * - excerpt
 * - thumbnailImageUrl => thumb
 * - date
 */
let excerpt_auto_limit = 70 * 5
let excerpt_end_indicator = '<!--more-->'

let index_fields = ['title', 'main_description', 'tags'];

// clearIndex 
index.clearIndex(function(err) {
  if (err)
    return onerror(err);
  index.setSettings({
    'searchableAttributes': index_fields
  }, function(err, content) {
    if(err)
      return onerror(err);
    helper.readItems(items_dir, targetext, read_concurrent_length, index_queue)
      .then(finish)
      .catch(onerror);
  });
});

function onerror(err) {
  console.error(err);
  process.exit(-1);
}

function finish() {
  index_queue_flush();
  // wait until all tasks do end
  // node does this automatically
}

let items_queue = [],
    index_running = false;

function index_queue(item) {
  items_queue.push(item);
  if(items_queue.length >= index_batch_limit)
    index_queue_flush();
}

function index_queue_flush() {
  if(items_queue.length > 0 && !index_running) {
    index_running = true;
    index_run(items_queue.splice(0, index_batch_limit))
      .then(() => {
        index_running = false;
        index_queue_flush();
      })
      .catch(onerror);
  }
}

function index_run(items) {
  return new Promise((resolve, reject) => {
    index.saveObjects(
      items.filter((_i) => _i.fm.moderated).map((_item) => {
        let item = helper.itemCompiled(_item)
        if(!item.short_title)
          item.short_title = _item.basename;
        // markdown to html (algolia understands it better)
        item.main_description = marked(item.main_description)
        let eidx = item.main_description.indexOf(excerpt_end_indicator);
        let excerpt = eidx != -1 ? item.main_description.slice(0, eidx) : 
            htmlsave.truncate(item.main_description, excerpt_auto_limit);
        return Object.assign({
          objectID: 'items_' + item.short_title,
          date: item.date || item.datemod,
          link: `/item/${ _item.basename}/`,
          thumbnailImageUrl: item.thumb,
          excerpt: excerpt
        }, _.fromPairs(
          index_fields.map((name) => {
            return [ name, item[name] ]
          })
        ))
      }),
      (err, content) => {
        if(err)
          return reject(err);
        index.waitTask(content.taskID, resolve);
      }
    );
  });
}
