const fs = require('fs')
const yamljs = require('yamljs')

if(process.argv.length < 4) {
  console.log("Usage: modifyitems.js modifier file [[file] ...]");
  process.exit(-1);
}
var modifier_str = process.argv[2],
    files = process.argv.slice(3);

var idx = modifier_str.indexOf('@');
if(idx < 1 || idx + 1 == modifier_str.length) {
  console.log("Invalid modifer, It's a reference to a module as follows, "+
              "func@module");
  process.exit(-1);
}
var funcname = modifier_str.slice(0, idx),
    modulename = modifier_str.slice(idx + 1);

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
function stringifyItem(item) {
  var content = '---\n';    
  content += yamljs.stringify(item.fm, 4);
  content += '---\n';
  content += item.content;
  return content;
}

var modifier;
try {
  modifier = require(modulename)[funcname];
  if(typeof modifier != 'function')
    throw new Error("A function is required");
} catch(e) {
  console.log("Cannot open the modifier");
  console.error(e);
  process.exit(-1);
}

for(let file of files) {
  try {
    var filedata = fs.readFileSync(file),
        item = parseItem(filedata.toString('utf8'));
    modifier(item);
    // fix newline
    var newline = '\r\n', // DOS-mode for convenience
                  // item.data.indexOf('\r\n') == -1 ? '\n' : '\r\n',
        out = stringifyItem(item).replace(/\r\n|\n/g, newline);
    fs.writeFileSync(file, out);
  } catch(err) {
    console.error("At " + file)
    console.error(err);
    process.exit(-1);
  }
}
