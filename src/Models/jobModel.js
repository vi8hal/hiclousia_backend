const { number } = require("joi");
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const jobSchema = new mongoose.Schema(
  {
    userDetailsID: {
      type: ObjectId,
      ref: "user"
    },
    jobRole: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    primarySkills: {
      type: String,
      required: true,
    },
    secondarySkills: {
      type: String,
      required: true,
    },
    jobDiscription: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    education: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);