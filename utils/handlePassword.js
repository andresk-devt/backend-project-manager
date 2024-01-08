const bcryptjs = require("bcryptjs");

const encrypt = async (password) => {
  return await bcryptjs.hash(password, 10);
};

const compare = async (password, hashPassword) => {
  return await bcryptjs.compare(password, hashPassword);
};

module.exports = { encrypt, compare }