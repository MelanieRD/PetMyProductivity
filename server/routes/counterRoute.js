const express = require("express");
const { getCounter, postCounter, putCounter } = require("../controllers/counterController");
const counterRouter = express.Router();

counterRouter.route("/").get(getCounter).post(postCounter).put(putCounter);

module.exports = counterRouter;
