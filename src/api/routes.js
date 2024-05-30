const { authenticateUser } = require("../middlewares/auth");
const {
  loginHandler,
  registerHandler,
  getUserInfo,
} = require("./handlers/auth");

const {
  getAllArticles,
  getOneArticle,
} = require("./handlers/artickel");

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
  {
    path: "/articles",
    method: "GET",
    handler: getAllArticles,
  },
  {
    path: "/articles/{id}",
    method: "GET",
    handler: getOneArticle,
  }
];

module.exports = routes;
