const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  role: { type: String, enum: ["admin", "editor", "viewer"], required: true },
});

module.exports = mongoose.model("User", userSchema);
