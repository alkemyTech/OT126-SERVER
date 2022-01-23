const express = require('express')
const slidesController = require('../controllers/slides')
const authMiddleware = require('../middlewares/auth')
const slideValidations = require('../middlewares/slide-validations')

const router = express.Router()

router.delete('/:id', authMiddleware.isAdmin, slidesController.remove)
router.get('/', slidesController.getAll)
router.get('/:id', slidesController.getById)
router.post('/create', slideValidations.createSlide, slidesController.create)
router.put('/:id', slideValidations.updateSlide, slidesController.update)

module.exports = router
