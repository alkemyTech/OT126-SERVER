const express = require('express')

const router = express.Router()

const newsController = require('../controllers/news')
const newsValidations = require('../middlewares/news-validations')
const authMiddleware = require('../middlewares/auth')

router.post('/', authMiddleware.isAdmin, newsValidations.create, newsController.create)
router.get('/', authMiddleware.isAuth, newsController.getAll)

module.exports = router
