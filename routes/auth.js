const express = require("express");
const router = express.Router();
const {
  validatorRegisterSchema,
  validatorLoginSchema,
} = require("../validators/auth");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require('../utils/handlePassword');
const user = require('../controllers/users')

router.post("/register", validatorRegisterSchema, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = { ...req, password };
  const response = user.createUser(body);
  res.send({ data: response });
});

router.post("/login", validatorLoginSchema, (req, res) => {});

module.exports = router;
