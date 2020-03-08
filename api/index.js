"use strict"

const Hapi = require("@hapi/hapi")

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3001,
    host: process.env.HOST || "localhost"
  })

  server.route({
    method: "GET",
    path: "/",
    handler: function(req, h) {
      return "Movile Hack Afro - Xpert"
    }
  })

  server.route({
    method: 'GET',
    path: '/student',
    handler: function (request, h) {
      const mock = {
        score: '20',
      };

      return mock;
    }
});

  await server.start();

  console.info("Server running on %s", server.info.uri)
}

init()
