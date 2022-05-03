const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import routes ---
const authRoutes = require("./routes/auth");

// use middleware ---
app.use(bodyParser.json());
app.use(cors());

// use routes ---
app.use("/api", authRoutes);

// database connection ---
mongoose.connect(process.env.SOILDB, {}).then(() => {
  console.log("DB CONNECTED");
});

const port = process.env.SERVER_PORT;
console.log(port);
app.listen(port, () => {
  console.log(`Server: ${port} running...`);
});
