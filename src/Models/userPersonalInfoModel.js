const mongoose = require("mongoose");

const userPersonalSchema = new mongoose.Schema(
  {
    userDetailsID: {
      type: ObjectId,
      ref: "userPersonal"
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
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
    dateOfBirth: {
        type: Date,
        required: true,
    },
    status: {
        type:String,
        default:'Active'
    },
    password: {
        type: String,
        required: true,
        
      },
  },
  { timestamps: true }
  );
  
  module.exports = mongoose.model("userPersonal", userPersonalSchema);