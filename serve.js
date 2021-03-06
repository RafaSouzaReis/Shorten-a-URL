const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.listen(process.env.PORT || 5000);

app.use(express.static("public"));