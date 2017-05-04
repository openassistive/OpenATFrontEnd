const yamljs = require('yamljs')
const path = require('path')
const fs = require('fs')

function parseItem(data) {
  var lines = data.split(/\r\n|\n/g);
  // parse yamljs
  var firstIdx = lines.indexOf('---'),
      secondIdx = lines.indexOf('---', firstIdx + 1);
  if(firstIdx != 0 || secondIdx <= firstIdx) 
    throw new Error("Invalid format");
  return {
    data: data,
    fm: yamljs.parse(lines.slice(0, secondIdx).join('\n')),
    content: lines.slice(secondIdx + 1).join('\n')
  };
}

function itemCompiled(item) {
  let data = Object.assign({}, item.fm)
  data.main_description = item.content;
  return data;
}

function stringifyItem(item) {
  var content = '---\n';    
  content += yamljs.stringify(item.fm, 4);
  content += '---\n';
  content += item.content;
  return content;
}
function readItems(items_dir, targetext, read_concurrent_length, peritem) {
  let read_queue = [],
      read_queue_running = 0;
  return new Promise((resolve, reject) => {
    fs.readdir(items_dir, (err, files) => {
      if(err) {
        reject(err)
      } else {
        let promises = [];
        for(let file of files) {
          if(file.endsWith(targetext)) {
            let promise = read(path.join(items_dir, file));
            promises.push(peritem ? promise.then(peritem) : promise);
          }
        }
        Promise.all(promises)
          .then(resolve, reject)
      } 
    });
  });

  function readQueue(callback, opts) {
    return new Promise((resolve, reject) => {
      if(read_queue_running < read_concurrent_length) {
        read_queue_running++;
        callback()
          .then((v) => {
            read_queue_running--;
            while(read_queue.length > 0 &&
                  read_queue_running < read_concurrent_length) {
              let tmp = read_queue.shift();
              readQueue(tmp[0]).then(tmp[1], tmp[2]);
            }
            return v;
          })
          .then(resolve, reject);
      } else {
        read_queue.push([ callback, resolve, reject ]);
      }
    });
  }

  function read(filepath) {
    return readQueue(() => {
      return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, buff) => {
          if(err) {
            reject(err);
          } else {
            try {
              resolve(
                Object.assign(
                  { basename: path.basename(filepath, targetext) }, 
                  parseItem(buff.toString('utf8'))
                )
              );
            } catch(err) {
              reject(err);
            }
          }
        });
      });
    });
  }

}

module.exports = { parseItem, itemCompiled, stringifyItem, readItems }
