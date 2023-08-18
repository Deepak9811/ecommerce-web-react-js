const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
