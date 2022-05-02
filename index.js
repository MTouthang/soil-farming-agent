require("dotenv").config;
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.listen(port, () => {
  console.log(`Server: ${port} running...`);
});
