const express = require('express')

const router = express.Router()

const newsController = require('../controllers/news')
const authMiddleware = require('../middlewares/auth')

router.post('/', authMiddleware.isAdmin, newsController.create) // @TO-DO validations

module.exports = router
