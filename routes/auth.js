const express = require("express");
const router = express.Router();
const {
  validatorRegisterSchema,
  validatorLoginSchema,
} = require("../validators/auth");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require('../utils/handlePassword');
const auth = require('../controllers/auth')

router.post("/register", validatorRegisterSchema, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = { ...req, password };
  const response = await auth.registerUser(body);
  res.send({ data: response });
});

router.post("/login", validatorLoginSchema, (req, res) => {});

module.exports = router;
