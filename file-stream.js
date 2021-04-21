// FileStream class to read from, write to, open, and close files on a file system, 
// and to manipulate other file-related operating system handles, including pipes, 
// standard input, and standard output.

const http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)