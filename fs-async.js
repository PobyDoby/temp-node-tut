// asyncronous 
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err)
		return
	}
	const first = result;
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err)
			return
		}
		const second = result
		console.log(result)
		writeFile(
			'./content/result-sync.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err)
					return
				}
				console.log(result)

			}
		)
	})
})

//in case of the async approach node offloads the taskas and still continues with code methods without waiting for the call back function to finish