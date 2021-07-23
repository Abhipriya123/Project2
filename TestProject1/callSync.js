var fs = require('fs');

var fileData = fs.readFileSync('./inputFile.txt');
console.log(fileData.toString());
console.log("End Of Program Execution")