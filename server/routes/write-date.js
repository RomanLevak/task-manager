const express = require('express')
const router = express.Router()
const writeDate = require('../DBrequests/write-file')

router.route('/:year/:month/:day')
	.put(writeDate)

module.exports = router