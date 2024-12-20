const express = require("express");
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask, modifyTaskStatus } = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks);

taskRouter.route("/:id").post(createTask).get(getTaskById).put(updateTask);

taskRouter.route("/:userID/:taskID").put(modifyTaskStatus).delete(deleteTask);

module.exports = taskRouter;
