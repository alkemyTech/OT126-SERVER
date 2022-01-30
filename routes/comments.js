const express = require("express")
const commentsRouter = express.Router()
const commentsController = require("../controllers/comments")
const commentsMiddleware = require("../middlewares/comments-validations")
const authMiddleware = require("../middlewares/auth")

commentsRouter.get('/', commentsController.getAll)
commentsRouter.post(
  '/',
  commentsMiddleware.validateComments,
  commentsController.create
)

commentsRouter.put('/:id', authMiddleware.isAdmin, commentsController.update)

module.exports = commentsRouter
