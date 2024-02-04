"use strict";

const petService = require("../services/petService");

const errorHandler = (err) => {
  const [statusCode, message] = err.message.split(" | ");
  const status = parseInt(statusCode);
  if (isNaN(status)) {
    return {
      status: 500,
      message: "Invalid data",
    };
  }

  return {
    status,
    message,
  };
};

/* ---- CREATE A PET ---- */

const createPet = (req, res) => {
  try {
    const newPet = petService.createPet(req.body);

    res
      .status(201)
      .json({ data: newPet, message: "successfully created a pet" });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

/* ---- GET ALL PETS ---- */

const getAllPets = (req, res) => {
  const pets = petService.getAllPets();

  res.json({ data: pets });
};

/* ---- GET ONE PET ---- */

const getOnePet = (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const pet = petService.getOnePet(id);
    res.json({ data: pet });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

/* ---- REPLACE A PET ---- */

const replacePet = (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const updatedPet = petService.replacePet(id, req.body);
    res.json({ data: updatedPet });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

/* ---- UPDATE A PET ---- */

const updatePet = (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const updatedPet = petService.updatePet(id, req.body);
    res.json({ data: updatedPet });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

/* ---- DELETE A PET ---- */

const deletePet = (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedPet = petService.deletePet(id);
    res.json({ data: deletedPet });
  } catch (err) {
    const { status, message } = errorHandler(err);
    res.status(status).json({ error: { message } });
  }
};

module.exports = {
  createPet,
  getAllPets,
  getOnePet,
  replacePet,
  updatePet,
  deletePet,
};
