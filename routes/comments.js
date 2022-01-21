const express = require('express')
const commentsRouter = express.Router()
const commentsController = require('../controllers/comments')

commentsRouter.get('/', commentsController.getAll)

module.exports = commentsRouter
