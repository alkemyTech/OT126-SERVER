const express = require('express')
const slidesController = require('../controllers/slides')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.delete('/:id', authMiddleware.isAdmin, slidesController.remove)
<<<<<<< HEAD
router.get('/', slidesController.getAll)
router.get('/:id', slidesController.getById)
=======
>>>>>>> 55335a2ed76c4c242a882ec58bea8e5673facc60

module.exports = router
