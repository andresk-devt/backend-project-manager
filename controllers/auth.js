const user = require("../controllers/users");
const { tokenSign, verifyToken } = require('../utils/handleJwt');

const registerUser = async (body) => {
  const registerUser = await user.createUser(body);
  const token = await tokenSign(registerUser);
  const data = {
    token,
    user: registerUser
  }
  return data;
};

module.exports = { registerUser };