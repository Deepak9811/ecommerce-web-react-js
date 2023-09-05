const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myTaskSchema = Schema({
  firstName: String,
  lastName: String,
  email: { type: String },
  password: String,
  confirmPassword: String,
  number: Number,
});

module.exports = mongoose.model("myTask", myTaskSchema);
