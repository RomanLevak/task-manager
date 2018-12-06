const 
	express = require('express')
	bodyParser = require('body-parser')
	get_date = require('./routes/read-date')
	write_date = require('./routes/write-date')
	path = require('path')

const app = express()


const port = 7577

app.use(bodyParser.json())

app.use(express.static(path.resolve(`${__dirname}/../client/public`)))

app.use(write_date)

app.use(get_date)

app.listen(port, () =>
	console.log(`server is working on port: ${port}`)
)
