const { authenticateUser } = require("../middlewares/auth");
const {
  loginHandler,
  registerHandler,
  getUserInfo,
} = require("./handlers/auth");

const { getAllArticles, getOneArticle } = require("./handlers/articles");
const apiResponse = require("../utils/apiResponse");

const routes = [
  {
    path: "/",
    method: "GET",
    handler: (request, h) => {
      return apiResponse(h, 200, "Welcome", {
        greet: "Hello World",
      });
    },
  },
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
  },
];

module.exports = routes;
