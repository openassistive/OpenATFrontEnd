const helper = require('./helper')
const fs = require('fs')

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
        item = helper.parseItem(filedata.toString('utf8'));
    modifier(item);
    // fix newline
    var newline = '\r\n', // DOS-mode for convenience
                  // item.data.indexOf('\r\n') == -1 ? '\n' : '\r\n',
        out = helper.stringifyItem(item).replace(/\r\n|\n/g, newline);
    fs.writeFileSync(file, out);
  } catch(err) {
    console.error("At " + file)
    console.error(err);
    process.exit(-1);
  }
}
