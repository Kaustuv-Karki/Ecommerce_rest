const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
