"use strict";

const pets = require("../models/pets");

/* ---- ERROR HANDLER ---- */

const err = (status, message) => {
  throw new Error(`${status} | ${message}`);
};

/* ---- CREATE A PET ---- */

const createPet = (body) => {
  const id = pets.length + 1;

  const { name, type, tricks } = body;

  if (!name || !type || !tricks || tricks.length === 0) {
    err("400", "Invalid name, type or tricks");
  }

  const newPet = {
    id,
    name,
    type,
    tricks,
  };

  pets.push(newPet);

  return newPet;
};

/* ---- GET ALL PETS ---- */

const getAllPets = () => pets;

/* ---- GET ONE PET ---- */

const getOnePet = (id) => {
  const pet = pets.find((pet) => pet.id === id);

  if (!pet) {
    err("404", "Pet not found");
  }

  return pet;
};

/* ---- REPLACE A PET ---- */

const replacePet = (id, body) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);

  if (petIndex < 0) {
    err("404", "Pet not found");
  }

  const { name, type, tricks } = body;

  if (!name || !type || !tricks) {
    err("400", "Invalid name, type or tricks");
  }

  const updatedPet = {
    id,
    name,
    type,
    tricks,
  };

  pets[petIndex] = updatedPet;

  return updatedPet;
};

/* ---- UPDATE A PET ---- */

const updatePet = (id, body) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);

  if (petIndex < 0) {
    err("404", "Pet not found");
  }

  const { name, type, tricks } = body;

  const updatedPet = {
    ...pets[petIndex],
    ...(name && { name }),
    ...(type && { type }),
    ...(tricks && { tricks }),
  };

  pets[petIndex] = updatedPet;

  return updatedPet;
};

/* ---- DELETE A PET ---- */

const deletePet = (id) => {
  const petIndex = pets.findIndex((pet) => pet.id === id);

  if (petIndex < 0) {
    err("404", "Pet not found");
  }

  const deletedPet = pets.splice(petIndex, 1);

  return deletedPet;
};

/* ------ EXPORT SERVICES (FOR USE IN CONTROLLERS) ----- */

module.exports = {
  createPet,
  getAllPets,
  getOnePet,
  replacePet,
  updatePet,
  deletePet,
};
