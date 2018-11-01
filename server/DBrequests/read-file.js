const fs = require('fs')

const readDate = function(req, res, next)
{
	const
	{
		year,
		month,
		day
	} = req.params

	fs.readFile(`./db/${year}-${month}/${day}.info`, 'utf-8', (err, data) =>
	{
		if (err) return res.json(
		{
			text: ''
		})

		res.json(
		{
			text: data
		})
	})
}

module.exports = readDate