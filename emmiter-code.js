/** const EventEmmitter = require('events');

const emmitter = new EventEmmitter;

const emmitter.on('TALk ALOUD', (EventArg)=>{
	console.log('listen emmitted', EventArg);
});

emmitter.emit('TAL ALOUD');
**/

// logging event
const EventEmmitter = require('events'); // EventEmmiter is a class
const emmitter = new EventEmmitter(); // this->emmiter is an object of EventEmmiter class

//Register the event listener function taking two parameters
emmitter.on('log', (eventArg)=>{   // addEventlister
    console.log("Response called", eventArg);      //(response2)
});

//Raise an event with .emit()
emmitter.emit('log', {id:1, url:"www"}); // signalling an event trigger (eventArg)

