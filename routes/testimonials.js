const express = require('express')
const router = express.Router()

const { createReqValidation, updateReqValidation } = require('../middlewares/testimonials-validations.js')
const authMiddleware = require('../middlewares/auth')
const testimonialsController = require('../controllers/testimonials')

router.delete('/:id', authMiddleware.isAdmin, testimonialsController.remove)
router.post('/', authMiddleware.isAdmin, createReqValidation, testimonialsController.create)
router.get('/', testimonialsController.getAll)
router.put('/:id', authMiddleware.isAdmin, updateReqValidation, testimonialsController.update)

module.exports = router
