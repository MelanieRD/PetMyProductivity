const { getShopItems, postShopItems, putShopItems, getShopItemsByType } = require("../controllers/shopController");

const express = require("express");
const { put } = require("./usersRoute");
const shopRouter = express.Router();

shopRouter.route("/").get(getShopItems).post(postShopItems).put(putShopItems);
shopRouter.route("/:type").get(getShopItemsByType);
module.exports = shopRouter;

/**
 *
 * {"name": "fish", "desc":"idk", "img":"fish.jpg", "price": 5, "quantity":1, "soldOut": false, "itemlvl":1, "state":"active", "type": "food", "tryfield": "tryfield"}
 */
