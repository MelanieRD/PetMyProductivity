const express = require("express");
const { getAllPets } = require("../controllers/petController");
const petsRouter = express.Router();

petsRouter.route("/").get(getAllPets);

module.exports = petsRouter;
