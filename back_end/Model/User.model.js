const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String,
  image: String,
});

module.exports = mongoose.model("User", userSchema);
