const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const Port = process.env.PORT || 8000;
const { createServer } = require('node:http');


app.use(express.json());

app.listen(Port, () => {
  console.log("Server is running on: " + Port);
});
