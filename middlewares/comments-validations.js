const { body } = require("express-validator");
const { executeValidation } = require("./validation-index");

const validateComments = [
  body("user_id")
    .notEmpty()
    .withMessage("You need to enter a user_id!")
    .bail()
    .isNumeric()
    .withMessage("Invalid user_id")
    .bail(),
  body("novelty_id")
    .notEmpty()
    .withMessage("You need to enter a novelty_id!")
    .bail()
    .isNumeric()
    .withMessage("Invalid novelty_id")
    .bail(),
  body("body").notEmpty().withMessage("You need to enter a body!"),
  executeValidation,
];

module.exports = { validateComments };
