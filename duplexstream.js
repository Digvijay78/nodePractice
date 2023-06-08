var fs = require('fs')
var j = fs.createReadStream('para.txt');
var k = fs.createWriteStream('para.txt', {flags : 'a'});
var = 