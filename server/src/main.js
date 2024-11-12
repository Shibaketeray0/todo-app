const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path: "./config.env"});
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
