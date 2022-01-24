const express = require('express')

const router = express.Router()

const categoriesController = require('../controllers/categories')
const authMiddleware = require('../middlewares/auth')
const { categories } = require('../middlewares/categories-validation')

router.post('/', authMiddleware.isAdmin, categories, categoriesController.create)
router.delete('/:id', authMiddleware.isAdmin, categoriesController.remove)

module.exports = router
