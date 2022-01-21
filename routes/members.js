const express = require('express')

const router = express.Router()
const membersController = require('../controllers/members')
const authMiddleware = require('../middlewares/auth')
const { createReqValidation } = require('../middlewares/members-validations')

router.post('/', authMiddleware.isAuth, createReqValidation, membersController.create)
router.delete('/:id', authMiddleware.isAuth, membersController.remove)

module.exports = router
