const express = require("express");
const htmlRouter = express.Router();
const burger = require("../models/burger");

htmlRouter.get("/", function(req, res) {
  burger.selectAll(function(burgers) {
    res.render("index", { burgers });
  });
});

module.exports = htmlRouter;
