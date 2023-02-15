const mongoose = require("mongoose");

const EducationInfoSchema = new mongoose.Schema(
  {
    userDetailsID: {
      type: ObjectId,
      ref: "userPersonal"
    },
    Authority: {
      type: String,
      required: true,
      enum: []
    },
    highestEducation: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    yearOfpassout: {
      type: String,
      required: true
    },
    discipline: {
      type: String,
      required: true,
      enum: [
        "Anthropology",
        "Archaeology",
        "History",
        "Linguistics and languages",
        "Philosophy",
        "Religion",
        "The arts",
        "Culinary arts",
        "Literature",
        "Performing arts",
        "Visual arts",
        "Economics",
        "Geography",
        "Interdisciplinary studies",
        "Area studies",
        "Ethnic and cultural studies",
        "Gender and sexuality studies",
        "Organizational studies",
        "Political science",
        "Psychology",
        "Sociology",
        "Biology",
        "Chemistry",
        "Earth sciences",
        "Physics",
        "Space sciences",
        "Astronomy",
        "Computer sciences",
        "Logic",
        "Mathematics",
        "Pure mathematics",
        "Applied mathematics",
        "Statistics",
        "Systems science",
        "Agriculture",
        "Architecture and design",
        "Business",
        "Divinity",
        "Education",
        "Engineering and technology",
        "Environmental studies and forestry",
        "Family and consumer science",
        "Human physical performance and recreation",
        "Journalism, media studies and communication",
        "Law",
        "Library and museum studies",
        "Medicine",
        "Military sciences",
        "Public administration",
        "Public policy",
        "Social work",
        "Transportation"]
    },
    yearGap: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("userEducation", EducationInfoSchema);