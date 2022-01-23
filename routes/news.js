const express = require('express')

const router = express.Router()

const newsController = require('../controllers/news')
const newsValidations = require('../middlewares/news-validations')
const authMiddleware = require('../middlewares/auth')

router.post('/', authMiddleware.isAdmin, newsValidations.create, newsController.create)
router.delete('/:id', authMiddleware.isAdmin, newsValidations.remove, newsController.remove)

module.exports = router
