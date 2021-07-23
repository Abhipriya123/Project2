var fs = require('fs');

var fileData = fs.readFile('./inputFile.txt', function(err,filedata){

    if(err){
        return console.error(err);
    }
    console.log(filedata.toString());
})

console.log("End Of Program Execution")