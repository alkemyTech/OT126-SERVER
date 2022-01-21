const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const authMiddleware = require('../middlewares/auth')
const testimonialsController = require('../controllers/testimonials')

router.delete('/:id', authMiddleware.isAdmin, testimonialsController.remove)

router.post('/', [
  check('name', 'don´t forget the name').not().isEmpty(),
  check('content', 'don´t forget the content').not().isEmpty()
], authMiddleware.isAdmin, testimonialsController.create)

module.exports = router
