const { getShopItems, postShopItems, putShopItems, getShopItemsByType, getShopUserToken, postShopUserToken, putBuyFoodItem, putEatFoodItem } = require("../controllers/shopController");

const express = require("express");
const { put } = require("./usersRoute");
const shopRouter = express.Router();

shopRouter.route("/").get(getShopItems).post(postShopItems).put(putShopItems);
shopRouter.route("/userShop/:token").get(getShopUserToken).post(postShopUserToken);
shopRouter.route("/userShop/:token/buy/:itemId").put(putBuyFoodItem);
shopRouter.route("/:type").get(getShopItemsByType);
//http://localhost:3000/app/Shop/userShop/${token}/buy/${itemId}`

shopRouter.route("/eat/:token").put(putEatFoodItem);
module.exports = shopRouter;

/**
 *
 * {"name": "fish", "desc":"idk", "img":"fish.jpg", "price": 5, "quantity":1, "soldOut": false, "itemlvl":1, "state":"active", "type": "food", "tryfield": "tryfield"}
 */
