
// required env variables
['AlgoliaAppID', 'AlgoliaAPIKey', 'OpenATIndexName']
  .forEach((name) => {
    if (!process.env[name]){
      console.error(`Error ${name} env var not found`);
      process.exit(-1);
    }
  });

const algoliasearch = require('algoliasearch')

let client = algoliasearch(process.env.AlgoliaAppID, process.env.AlgoliaAPIKey, { timeout: 2 * 60 * 1000 }) // two minutes
let index = client.initIndex(process.env.OpenATIndexName)

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
  });
});
