const { loginHandler, registerHandler } = require("./handlers/auth");

const routes = [
  {
    path: "/login",
    method: "POST",
    handler: loginHandler,
  },
  {
    path: "/register",
    method: "POST",
    handler: registerHandler
  }
];

module.exports = routes;
