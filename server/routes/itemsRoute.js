const express = require("express");
const { getAllItems } = require("../controllers/itemController");
const itemsRouter = express.Router();

itemsRouter.route("/").get(getAllItems);

module.exports = itemsRouter;
