const express = require("express");
const router = express.Router();

// User
const UsersRoute = require("./usersRoute");
router.use("/users", UsersRoute);

//Pet
const petsRoute = require("./petsRoute");
router.use("/pets", petsRoute);

//Items
const itemsRoute = require("./itemsRoute");
router.use("/items", itemsRoute);

module.exports = router;
