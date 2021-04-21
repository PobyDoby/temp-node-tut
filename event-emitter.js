// An event emitter is a pattern that listens to a named event, fires a callback, 
// then emits that event with a value. Sometimes this is referred to as a 
// listener. It's referring to the same thing

const EventEmitter = require('events')
const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other data received `)
})

customEmitter.emit('response', 'john', 34)