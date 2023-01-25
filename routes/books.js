const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://mahmed:jordan45@cluster0.tfnursh.mongodb.net/?retryWrites=true&w=majority`
);
const Book = require("../models/Book");
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});
router.get("/new", function (req, res) {
  res.render("create");
});
router.post("/new", async function (req, res) {
  await Book.create(req.body);
  res.redirect("/books");
});
// router.get("/update/:id", function (req, res, next) {
//   const bookToUpdate = data.books.filter((book) => book.isbn === req.params.id);
//   res.render("update", {
//     isbn: bookToUpdate[0].isbn,
//     title: bookToUpdate[0].title,
//     subtitle: bookToUpdate[0].subtitle,
//     author: bookToUpdate[0].author,
//     published: bookToUpdate[0].published,
//     publisher: bookToUpdate[0].publisher,
//     pages: bookToUpdate[0].pages,
//     description: bookToUpdate[0].description,
//     website: bookToUpdate[0].website,
//   });
// });
// router.post("/new", function (req, res) {
//   const book = {
//     isbn: req.body.isbn,
//     title: req.body.title,
//     subtitle: req.body.subtitle,
//     author: req.body.author,
//     published: req.body.published,
//     publisher: req.body.publisher,
//     pages: req.body.pages,
//     description: req.body.description,
//     website: req.body.website,
//   };
//   data.books.push(book);
//   res.redirect("/books");
// });
// router.get("/:id", function (req, res, next) {
//   const getOneBook = data.books.filter((book) => book.isbn === req.params.id);
//   res.send(`The book is ${getOneBook[0].title}`);
// });
// router.delete("/:id", async (req, res, next) => {
//   const id = req.params;
//   const filterData = await data.books.filter(
//     (book) => book.isbn !== req.params.id
//   );
//   res.json({ message: `We deleted the book with id: ${id}`, data: filterData });
// });
module.exports = router;
