// wehn we use a variable to assign it a file with asysnc and sync options the variable will eventually get bigger and bigger and the 
// we will get an error which mena we cannot place everything into that one variable to resolve that we will use streams
// solution: read stream option


const {createReadStream} = require('fs')

const stream = createReadStream('.content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})
stream.on('data', (result) => {
    console.log(result)
    // stream.on('error', (err) => console.log(result))
})
