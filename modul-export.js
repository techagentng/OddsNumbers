// logging event
const EventEmitter = require('events'); // EventEmmiter is a class
//const emmitter = new EventEmmitter(); // this->emmitter is an object of EventEmmiter class

class Logger extends EventEmitter{
    log(message){
    console.log(message);
    //Raise an event with .emit()
    this.emit('log', {id:1, url:'www'}); // signalling an event trigger with (eventArg)
  }
}  
 
module.exports = Logger;


