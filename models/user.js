const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: String,
  ratingAvg: { "$avg": "$rating" },
  comment: String,
  timestamps: { createdAt: 'created_at' }
});

const User = mongoose.model("User", userSchema);

module.exports = User;