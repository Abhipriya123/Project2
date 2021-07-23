const EventEmitter = require('events');

var eventEmitter = new EventEmitter()

eventEmitter.on('myEvent1', (msg) => {

    console.log(msg);

})

eventEmitter.on('myEvent2', (msg) => {

    console.log(msg);

})

//Triggering My Event
eventEmitter.emit('myEvent1', "This is my First Event Happening");
eventEmitter.emit('myEvent2', "This is my Second Event Happening");