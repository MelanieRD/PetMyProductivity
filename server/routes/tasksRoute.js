const express = require("express");
const { getAllTasks } = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks);

module.exports = taskRouter;
