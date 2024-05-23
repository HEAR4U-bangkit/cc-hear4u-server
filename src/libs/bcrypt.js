const bcrypt = require("bcryptjs");

const encrypt = async (password) => {
  return await bcrypt.hash(password, 8);
};

const compare = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

module.exports = { encrypt, compare };
