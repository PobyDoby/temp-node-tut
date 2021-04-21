const http = require('http');

//using event emitter APIfor server setup
const server = http.createServer()
// emits request event
// suscribe listen and respond to '/'
server.on('request', (req,res) => {
    res.end('Welcome')
})

server.listen(5000)