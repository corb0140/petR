"use strict";

const { Router } = require("express");
const petController = require("../controllers/petController");

const petRouter = Router();

petRouter.post("/", petController.createPet);

petRouter.get("/", petController.getAllPets);

petRouter.get("/:id", petController.getOnePet);

petRouter.put("/:id", petController.replacePet);

petRouter.patch("/:id", petController.updatePet);

petRouter.delete("/:id", petController.deletePet);

module.exports = petRouter;
