const express = require("express");
const commentsRouter = express.Router();
const commentsController = require("../controllers/comments");
const commentsMiddleware = require("../middlewares/comments-validations");
const siMyComents = require("../middlewares/");

commentsRouter.get("/", commentsController.getAll);
commentsRouter.post(
  "/",
  commentsMiddleware.validateComments,
  commentsController.create
);

commentsRouter.put(
  "/:id",
  authMiddleware.isOwnComment,
  commentsController.update
);

module.exports = commentsRouter;
