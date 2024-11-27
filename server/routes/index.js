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

//Task
const taskRoute = require("./tasksRoute");
router.use("/tasks", taskRoute);

//Counter
const counterRoute = require("./counterRoute");
router.use("/counter", counterRoute);

module.exports = router;
