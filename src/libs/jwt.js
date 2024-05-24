const jwt = require("jsonwebtoken");
const configs = require("../configs");

const createToken = ({ payload }) => {
  const token = jwt.sign(payload, configs.jwtSecret, {
    expiresIn: configs.jwtExpire,
  });

  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, configs.jwtSecret);

module.exports = { createToken, isTokenValid };
