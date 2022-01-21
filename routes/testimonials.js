const express = require('express')
const router = express.Router()
const { createReqValidation } = require('../middlewares/testimonials-validations.js')

const authMiddleware = require('../middlewares/auth')
const testimonialsController = require('../controllers/testimonials')

router.delete('/:id', authMiddleware.isAdmin, testimonialsController.remove)

router.post('/', /* authMiddleware.isAdmin,  */ createReqValidation, testimonialsController.create)

module.exports = router
