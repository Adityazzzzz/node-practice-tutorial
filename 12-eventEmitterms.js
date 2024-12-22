const EventEmitter = require('events');
const customEmitter = new EventEmitter();


customEmitter.on('response',(name,id)=>{
    console.log('data received user is ' + name + ' with id ' + id);
    
})

customEmitter.emit('response','john',34);    // we pass parameters here