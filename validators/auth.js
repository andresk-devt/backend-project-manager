const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");
const userModel = require("../models/nosql/users");

const validatorRegisterSchema = [
  check("name")
    .exists()
    .withMessage("The name is required")
    .notEmpty()
    .withMessage("Name cannot be empty"),
  check("email")
    .exists()
    .withMessage("The email is required")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .custom(async (value) => {
      const existingUser = await userModel.findOne({ email: value });
      if (existingUser) {
        return Promise.reject("Email is already in use");
      }
    }),
  check("password")
    .exists()
    .withMessage("The password is required")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("The password must be at least 8 characters long")
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    .withMessage(
      "The password must contain at least 1 capital letter, 1 number and 1 symbol."
    ),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLoginSchema = [
  check("email")
    .exists()
    .withMessage("The email is required")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail(),
  check("password")
    .exists()
    .withMessage("The password is required")
    .notEmpty()
    .withMessage("Password cannot be empty"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorRegisterSchema, validatorLoginSchema };
