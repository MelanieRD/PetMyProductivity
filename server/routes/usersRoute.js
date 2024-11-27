const express = require("express");
const { getUsers, getUsersById, putUser, deleteUser, postUser } = require("../controllers/userController");
const usersRouter = express.Router();

usersRouter.route("/").get(getUsers);
usersRouter.route("/:id").get(getUsersById).post(postUser).put(putUser).delete(deleteUser);

module.exports = usersRouter;
