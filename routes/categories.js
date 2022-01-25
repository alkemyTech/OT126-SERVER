const express = require('express')

const router = express.Router()

const categoriesController = require('../controllers/categories')
const authMiddleware = require('../middlewares/auth')
const { createValidationCategory } = require('../middlewares/categories-validation')

router.post('/', authMiddleware.isAdmin, createValidationCategory, categoriesController.create)
router.delete('/:id', authMiddleware.isAdmin, categoriesController.remove)

module.exports = router
