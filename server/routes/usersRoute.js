const express = require("express");
const { getUsers, getUsersById, putUser, deleteUser, postUser, loginPetUser, logoutUser, authenticateToken, accessGranted } = require("../controllers/userController");
const usersRouter = express.Router();

usersRouter.route("/").get(getUsers);

usersRouter.route("/login/:token").post(loginPetUser);
usersRouter.route("/logout").post(logoutUser);
usersRouter.route("/protected").get(authenticateToken, accessGranted);

usersRouter.route("/:id").post(postUser).put(putUser).delete(deleteUser);

module.exports = usersRouter;
