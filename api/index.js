"use strict"

const Hapi = require("@hapi/hapi")

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost"
  })

  server.route({
    method: "GET",
    path: "/",
    handler: function(req, h) {
      return "Movile Hack Afro - Xpert"
    }
  })

  await server.start();

  console.info("Server running on %s", server.info.uri)
}

init()
