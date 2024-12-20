const path = require("path");

console.log(path.sep)

const filepath=path.join('/folder','subforder','file.txt');
console.log(filepath);

const base=path.basename(filepath);
console.log(base);

