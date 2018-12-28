const EventEmitter = require('events');
const Logger = require('./modul-export'); //Logger is a class(returns string) from prev
const logger = new Logger();
// When the logger object raises the 'log' event
logger.on('log', (eventArg)=>{   // addEventlister
    console.log('Response called', eventArg);      //(response2)
});
logger.log('this is it');
