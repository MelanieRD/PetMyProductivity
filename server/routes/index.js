const express = require("express");
const router = express.Router();

const UserRoute = require("./userRoute");
router.use("/user", UserRoute);

const PetRoute = require("");
const InventoryRoute = require("");
const ShopRouter = require("");

module.exports = router;
