const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const db = mongoose.connect("mongodb://localhost/bookAPI");
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");
const bookRouter = require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my nodemon API");
});

app.listen(port, () => {
  console.log(`running in port ${port}`);
});
