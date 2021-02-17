const { EventEmitter } = require('events');
const EventEm = require('events');

const emitter = new EventEmitter();

//enregistrement 
emitter.on('messageLogged',
    ()=>{
        console.log("listener called");
    }
)
emitter.on('messageLogged',
    ()=>{
        console.log("listener called 2");
    }
)

//déclenchement de l'event
emitter.emit('messageLogged');
//emitter.emit('messageLogged');
