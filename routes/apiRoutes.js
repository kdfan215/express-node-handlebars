const express = require("express");
const apiRouter = express.Router();
const burgers_controller = require("../burgers_controller");

apiRouter.get("/burgers", burgers_controller.selectAll);
apiRouter.post("/burgers", burgers_controller.insertOne);
apiRouter.put("/burgers/:id", burgers_controller.updateOne);

module.exports = apiRouter;
