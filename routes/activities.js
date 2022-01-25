const express = require('express')
const router = express.Router()

const activitiesController = require('../controllers/activities')
const authMiddleware = require('../middlewares/auth')
const activitiesValidations = require('../middlewares/activities-validations')

router.put('/:id', authMiddleware.isAdmin, activitiesValidations.update, activitiesController.update)

module.exports = router
