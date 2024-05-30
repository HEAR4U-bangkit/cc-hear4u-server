const Hapi = require("@hapi/hapi");
const routes = require("./src/api/routes");
const configs = require("./src/configs");
const APIError = require("./src/errors/APIError");
const apiResponse = require("./src/utils/apiResponse");

const init = async () => {
  const server = Hapi.server({
    port: configs.port,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  server.ext("onPreResponse", (request, h) => {
    const response = request.response;

    if (response instanceof APIError) {
      return apiResponse(h, response.statusCode, response.message);
    }

    if (response.isBoom) {
      return apiResponse(h, response.output.statusCode, response.message);
    }

    return h.continue;
  });

  await server.start();

  console.log(`Server is running at : ${server.info.uri}`);
};

init();
