<<<<<<< HEAD

const mongoose = require ("mongoose");
=======
const mongoose = require("mongoose");
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a
const ObjectId = mongoose.Schema.Types.ObjectId;

const jobSchema = new mongoose.Schema(
  {
<<<<<<< HEAD
    userDetailsID:{
=======
    userDetailsID: {
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a
      type: ObjectId,
      ref: "user"
    },
    jobRole: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    experience:{
      type: String,
      required: true,
    },
    primarySkills:{
=======
    experience: {
      type: Number,
      required: true,
    },
    primarySkills: {
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a
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
<<<<<<< HEAD
    salary: {
      type: String,
      required: true
    },
=======
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a
    education: {
      type: String,
      required: true
    },
<<<<<<< HEAD
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    }
    
=======
    location: {
      type: String,
      required: true,
    }
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a
  },
  { timestamps: true }
);

<<<<<<< HEAD
module.exports = mongoose.model("Job", jobSchema);
=======
module.exports = mongoose.model("Job", jobSchema);
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a
