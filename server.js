const express = require("express");

const dealerRouter = require("./cars/dealerRouter.js");

const server = express();

server.use(express.json());

server.use("/api/cars", dealerRouter);

module.exports = server;
