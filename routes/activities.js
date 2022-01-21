const express = require('express')
const router = express.Router()

const activitiesController = require('../controllers/activities')
const authMiddleware = require('../middlewares/auth')
const activitiesValidations = require('../middlewares/activities-validations')

router.post('/', authMiddleware.isAdmin, activitiesValidations.create, activitiesController.create)

module.exports = router