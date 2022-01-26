const express = require("express")
const commentsRouter = express.Router()
const commentsController = require("../controllers/comments")
const commentsMiddleware = require("../middlewares/comments-validations")

commentsRouter.get('/', commentsController.getAll)
commentsRouter.post(
  '/',
  commentsMiddleware.validateComments,
  commentsController.create
)

commentsRouter.put(
  '/:id',
/*  commetsMiddleware.isOwnComment, */
  commentsController.update
)

module.exports = commentsRouter
