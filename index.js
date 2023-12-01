const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/users.js");
const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/user", userRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PROT || PORT}`);
});
