const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  isbn: Number,
  title: String,
  subtitle: String,
  author: String,
  published: String,
  publisher: String,
  pages: Number,
  description: String,
  website: String,
});
module.exports = mongoose.model("Book", bookSchema);
