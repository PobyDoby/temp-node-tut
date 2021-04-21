const { readFile, writeFile, writeFileSync } = require('fs')

for(let i = 0; i < 100000; i++){
    writeFileSync('./content/big.txt', `Hello worls ${i}\n`, { flag: 'a'})
}