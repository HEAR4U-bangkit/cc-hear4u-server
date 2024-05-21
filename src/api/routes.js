const apiResponse = require("../utils/apiResponse");

const routes = [
  {
    path: "/",
    method: "GET",
    handler: (request, h) => {
      return apiResponse(h, 200, {
        hello: "world",
      });
    },
  },
];

module.exports = routes;
