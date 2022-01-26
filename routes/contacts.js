const express = require('express')

const router = express.Router()

const contactsController = require('../controllers/contacts')
const { contacts } = require('../middlewares/contacts-validation')
const authMiddleware = require('../middlewares/auth')

router.post('/', authMiddleware.isAuth, contacts, contactsController.create)
router.get('/', authMiddleware.isAuth, authMiddleware.isAdmin, contactsController.getAll)

module.exports = router
