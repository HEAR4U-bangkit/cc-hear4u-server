const Hapi = require("@hapi/hapi");
const routes = require("./src/api/routes");
const configs = require("./src/configs");

const init = async () => {
  const server = Hapi.server({
    port: configs.port,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();

  console.log(`Server is running at : ${server.info.uri}`);
};

init();
