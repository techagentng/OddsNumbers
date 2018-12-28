const os = require('os');
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
console.log(totalMemory);
console.log("My computer free memory " + freeMemory); //old method 
console.log(`My computer total memory  ${totalMemory}`); // ECMA SCRIPT METHOD

