const express = require('express');
const router = express.Router();
const { updateReqValidation } = require('../middlewares/testimonials-validations.js');


const authMiddleware = require('../middlewares/auth')
const testimonialsController = require('../controllers/testimonials')

router.delete('/:id', authMiddleware.isAdmin, testimonialsController.remove)
<<<<<<< HEAD

router.get('/', /* authMiddleware.isAut, */ testimonialsController.getAll)
=======
router.put('/:id', authMiddleware.isAdmin, updateReqValidation, testimonialsController.update );
router.get('/', authMiddleware.isAut, testimonialsController.getAll )
>>>>>>> dev

module.exports = router

