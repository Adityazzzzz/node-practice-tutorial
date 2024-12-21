const { log } = require('node:console');
const names=require('./2-names');
const sayhi=require('./3-utils');
// console.log(names)

sayhi('susan')
sayhi(names.john)
sayhi(names.peter)

const altsyntax= require('./4-alternativesyntax');
console.log(altsyntax);
