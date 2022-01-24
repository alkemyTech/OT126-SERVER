const express = require('express')

const router = express.Router()

const contactsController = require('../controllers/contacts')
const { contacts } = require('../middlewares/contacts-validation')

router.post('/', contacts, contactsController.create)

module.exports = router
