const mongoose = require("mongoose");

const userProjectSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    projectTitle: {
      type: String,
      required: true,
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    timeDuration: {
        type: Number,
        required: true,
    n},
    authority: {
        type: String,
        required: true,
        enum: []
    },
    scope: {
        type: String,
        required: true, 
    }
  },
  { timestamps: true }
);

module.export = mongoose.model("userProject", userProjectSchema);