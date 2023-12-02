const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/users.route.js");
const authRoute = require("./routes/auth.route.js");
const productRoute = require("./routes/product.route.js");
const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connect"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PROT || PORT}`);
});
