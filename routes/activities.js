const express = require('express')
const router = express.Router()

const activitiesController = require('../controllers/activities')
const authMiddleware = require('../middlewares/auth')
const activitiesValidations = require('../middlewares/activities-validations')

router.get('/', authMiddleware.isAuth, activitiesController.getAll)

module.exports = router
