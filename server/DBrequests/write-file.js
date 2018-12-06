const 
	fs = require('fs')
 	path = require('path')

const writeDate = function(req, res, next) {
	const { year, month, day } = req.params

	const { text } = req.body

	const dir = path.resolve(`${__dirname}/../db/${year}-${month}`)

	if (!fs.existsSync(dir)) {
		//create a directory if it doesn't exist
		fs.mkdirSync(dir)
	}

	fs.writeFile(`${dir}/${day}.info`, text, (err, data) => {
		if (err) return console.log(err)

		res.json('ok')
	})
}

module.exports = writeDate
