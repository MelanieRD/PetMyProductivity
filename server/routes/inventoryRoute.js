const express = require("express");
const { getInventoryByToken, addItemToInventory } = require("../controllers/inventoryController");

const inventoryRouter = express.Router();

inventoryRouter.route("/:token").get(getInventoryByToken);
inventoryRouter.route("/").post(addItemToInventory);

module.exports = inventoryRouter;
