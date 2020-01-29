const burger = require("./models/burger");

const burgers_controller = {
  selectAll: function(req, res) {
    burger.selectAll(function(results) {
      res.json(results);
    });
  },
  insertOne: function(req, res) {
    burger.insertOne(req.body, function(results) {
      res.json(results);
    });
  },
  updateOne: function(req, res) {
    const { id } = req.params;
    let { devoured } = req.body;
    devoured = Boolean(devoured);

    const condition = { id };
    const dto = { devoured };
    burger.updateOne(dto, condition, function(results) {
      res.json(results);
    });
  }
};

module.exports = burgers_controller;
