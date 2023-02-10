const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema(
  {
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
    companyName: {
        type: String,
        required: true,
    },
    companyType: {
        type: String,
        enum: ["MNC", "Start-Ups", "Government","Service-Based","Product-Based"]
    },
    companyLocation: {
        type: String, 
    },
    jobPost: {
      type: Number,
      default: 0
    },
    status: {
        type:String,
        default:'Active'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("recruiter", recruiterSchema);