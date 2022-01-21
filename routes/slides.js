const express = require('express')
const slidesController = require('../controllers/slides')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.delete('/:id', authMiddleware.isAdmin, slidesController.remove)
router.get('/', slidesController.getAll)
router.get('/:id', slidesController.getById)
router.post('/create', slidesController.create)

module.exports = router
