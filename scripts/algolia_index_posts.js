
// required env variables
['AlgoliaAppID', 'AlgoliaAPIKey', 'OpenATIndexName']
  .forEach((name) => {
    if (!process.env[name]){
      console.error(`Error ${name} env var not found`);
      process.exit(-1);
    }
  });

if(process.argv.length != 3) {
  console.log("Usage: algolia_index_posts.js <posts-directory>");
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

let posts_dir = fs.realpathSync(process.argv[2]);
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

// items and posts are in the same format
helper.readItems(posts_dir, targetext, read_concurrent_length, index_queue)
  .then(finish)
  .catch(onerror);

function onerror(err) {
  console.error(err);
  process.exit(-1);
}

function finish() {
  index_queue_flush();
  // wait until all tasks do end
  // node does this automatically
}

let posts_queue = [],
    index_running = false;

function index_queue(post) {
  posts_queue.push(post);
  if(posts_queue.length >= index_batch_limit)
    index_queue_flush();
}

function index_queue_flush() {
  if(posts_queue.length > 0 && !index_running) {
    index_running = true;
    index_run(posts_queue.splice(0, index_batch_limit))
      .then(() => {
        index_running = false;
        index_queue_flush();
      })
      .catch(onerror);
  }
}

function index_run(posts) {
  return new Promise((resolve, reject) => {
    index.saveObjects(
      posts.filter((_p) => !!_p.fm.date && !!_p.fm.title).map((_post) => {
        let post = helper.itemCompiled(_post)
        // markdown to html (algolia understands it better)
        post.main_description = marked(post.main_description)
        let eidx = post.main_description.indexOf(excerpt_end_indicator);
        let excerpt = eidx != -1 ? post.main_description.slice(0, eidx) : 
            htmlsave.truncate(post.main_description, excerpt_auto_limit);
        let date = new Date(post.date);
        let slug = post.slug || post.url || _post.basename;
        return Object.assign({
          objectID: 'posts_' + slug,
          date: post.date,
          link: post.url || `${date.getFullYear()}/${date.getMonth()+1}/${slug}/`,
          thumbnailImageUrl: post.thumb,
          excerpt: excerpt
        }, _.fromPairs(
          index_fields.map((name) => {
            return [ name, post[name] ]
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
