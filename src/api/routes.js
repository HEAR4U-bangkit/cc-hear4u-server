const { authenticateUser, authorizeRoles } = require("../middlewares/auth");
const {
  loginHandler,
  registerHandler,
  getUserInfo,
  updateProfile,
  updatePassword,
} = require("./handlers/auth");
const {
  getAllArticles,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("./handlers/articles");
const apiResponse = require("../utils/apiResponse");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./handlers/user");
const multer = require("multer");

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
    path: "/password/{id}",
    method: "PUT",
    options: {
      pre: [{ method: authenticateUser, assign: "user" }],
    },
    handler: updatePassword,
  },
  {
    path: "/articles",
    method: "POST",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        maxBytes: 4 * 1024 * 1024,
        multipart: true,
      },
      handler: createArticle,
    },
    handler: multer.single("thumbnail"),
  },
  {
    path: "/articles/{id}",
    method: "PUT",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        maxBytes: 4 * 1024 * 1024,
        multipart: true,
      },
      handler: createArticle,
    },
    handler: multer.single("thumbnail"),
  },
  {
    path: "/articles/{id}",
    method: "DELETE",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
    },
    handler: deleteArticle,
  },
  {
    path: "/users",
    method: "GET",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
    },
    handler: getAllUsers,
  },
  {
    path: "/users/{id}",
    method: "GET",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
    },
    handler: getOneUser,
  },
  {
    path: "/users",
    method: "POST",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
    },
    handler: createUser,
  },
  {
    path: "/users/{id}",
    method: "PUT",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
    },
    handler: updateUser,
  },
  {
    path: "/users/{id}",
    method: "DELETE",
    options: {
      pre: [
        { method: authenticateUser, assign: "user" },
        { method: authorizeRoles("admin") },
      ],
    },
    handler: deleteUser,
  },
];

module.exports = routes;
