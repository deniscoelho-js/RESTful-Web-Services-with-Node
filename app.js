const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookRouter = express.Router();
const db = mongoose.connect("mongodb://localhost/bookAPI");
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");

bookRouter.route("/books/:bookId").get((req, res) => {
  const { bookId } = req.params;
  Book.findById(bookId, (err, book) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(book);
    }
  });
});

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my nodemon API");
});

app.listen(port, () => {
  console.log(`running in port ${port}`);
});
