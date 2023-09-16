const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log("Event has occured");
})
eventEmitter.emit('tutorial');