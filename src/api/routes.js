const { loginHandler } = require("./handlers/auth");

const routes = [
  {
    path: "/login",
    method: "POST",
    handler: loginHandler,
  },
];

module.exports = routes;
