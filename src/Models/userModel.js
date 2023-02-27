const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Miss"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    recruter: {
      type: Boolean,
      required: true,
      default: false
    },
    password: {
      type: String,
      required: true,

    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

