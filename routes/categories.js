const express = require('express')

const router = express.Router()

const categoriesController = require('../controllers/categories')
const authMiddleware = require('../middlewares/auth')
const { categories } = require('../middlewares/categories-validation')

router.post('/', authMiddleware.isAdmin, categories, categoriesController.createCategory)
router.delete('/:id', authMiddleware.isAdmin, categoriesController.remove)

module.exports = router
