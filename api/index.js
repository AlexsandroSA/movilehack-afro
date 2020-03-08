"use strict"

const Hapi = require("@hapi/hapi")
const mocks = require('./mocks');

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
  });

  server.route({
    method: 'GET',
    path: '/teacher/classes',
    handler: function (request, h) {
      return mocks.classes;
    }
  });

  server.route({
    method: 'GET',
    path: '/teacher/class-detail',
    handler: function (request, h) {
      return mocks.classDetail;
    }
  });

  server.route({
    method: 'GET',
    path: '/student',
    handler: function (request, h) {
      return mocks.student;
    }
  });

  await server.start();

  console.info("Server running on %s", server.info.uri)
}

init()
