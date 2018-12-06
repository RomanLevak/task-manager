const 	
	fs = require('fs')
	path = require('path')

const readDate = function(req, res, next) {
	const { year, month, day } = req.params

	const dir = path.resolve(`${__dirname}/../db/${year}-${month}`)

	fs.readFile(`${dir}}/${day}.info`, 'utf-8', (err, data) => {
		if (err)
			return res.json({
				text: ''
			})

		res.json({
			text: data
		})
	})
}

module.exports = readDate
