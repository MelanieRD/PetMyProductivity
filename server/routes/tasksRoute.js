const express = require("express");
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks);

taskRouter.route("/:id").post(createTask).get(getTaskById).put(updateTask).delete(deleteTask);

module.exports = taskRouter;
