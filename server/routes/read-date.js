const express = require('express')
const router = express.Router()
const getDate = require('../DBrequests/read-file')

router.route('/:year/:month/:day')
	.get(getDate)

module.exports = router