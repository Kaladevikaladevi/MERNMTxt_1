const { param } = require("express-validator");

exports.validateObjectId = [
  param("id")
    .isMongoId()
    .withMessage("Invalid book ID"),
];
