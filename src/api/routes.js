const { authenticateUser } = require("../middlewares/auth");
const {
  loginHandler,
  registerHandler,
  getUserInfo,
} = require("./handlers/auth");

const routes = [
  {
    path: "/login",
    method: "POST",
    handler: loginHandler,
  },
  {
    path: "/register",
    method: "POST",
    handler: registerHandler,
  },
  {
    path: "/me",
    method: "GET",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: getUserInfo,
  },
];

module.exports = routes;
