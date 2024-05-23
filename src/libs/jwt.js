const jwt = require("jsonwebtoken");

const createToken = ({ payload }) => {
  const token = jwt.sign(payload, "", {
    expiresIn: "",
  });

  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, "");

module.exports = { createToken, isTokenValid };
