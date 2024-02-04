"use strict";

const express = require("express");
const petRouter = require("./routers/petRouter");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running smoothly");
});

app.use("/api/pets", petRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
