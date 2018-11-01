const express = require('express')
const bodyParser = require('body-parser')
const get_date = require('./routes/read-date')
const write_date = require('./routes/write-date')

const app = express()


const port = 7576

app.use(bodyParser.json())

app.use(express.static('../client/public'))

app.use(write_date)

app.use(get_date)

app.listen(port, () =>
{
	console.log(`server is working on port: ${port}`)
})