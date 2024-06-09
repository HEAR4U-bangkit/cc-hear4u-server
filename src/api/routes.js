const { authenticateUser } = require("../middlewares/auth");
const {
  loginHandler,
  registerHandler,
  getUserInfo,
  updateProfile,
} = require("./handlers/auth");

const {
  getAllArticles,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("./handlers/articles");
const apiResponse = require("../utils/apiResponse");

const routes = [
  {
    path: "/",
    method: "GET",
    handler: (request, h) => {
      return apiResponse(h, 200, "Welcome", {
        greet: "Hello everyone!",
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
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: getAllArticles,
  },
  {
    path: "/articles/{id}",
    method: "GET",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: getOneArticle,
  },
  {
    path: "/profile/{id}",
    method: "PUT",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: updateProfile,
  },
  {
    path: "/articles",
    method: "POST",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: createArticle,
  },
  {
    path: "/articles/{id}",
    method: "PUT",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: updateArticle,
  },
  {
    path: "/articles/{id}",
    method: "DELETE",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: deleteArticle,
  },
];

module.exports = routes;
