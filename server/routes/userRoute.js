const express = require("express");
const { getUsers } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/").get(getUsers);
module.exports = userRouter;
