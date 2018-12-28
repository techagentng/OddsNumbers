const fs = require('fs');
var files = fs.readdirSync('./'); // synchronus form of the method
// fs method reads files and displays result as files if there be no errors

fs.readdir('./', function(err, files){  //async form of calling a method
   if(err) console.log(Error, err);
    else console.log('result', files);
}); 
//ES6 method 
fs.readdir('$', (err, files)=>{   // error
   if(err) console.log(Error, err);
    else console.log('result', files); 
});