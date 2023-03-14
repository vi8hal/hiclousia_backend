// const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
// const EducationSchema = new mongoose.Schema(
//   {
//     userDetailsID: {
//       type: ObjectId,
//       ref: "user"
//     },
//     School:{
//       type:String,
//       required:true
//     },
//     Degree:{
//       type:String,
//       required:true
//     },
//     Grade:{
//       type:String,
//       required:true
//    },
//     yearOfpassout: {
//       type: String,
//       required: true
//     },

//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Education", EducationSchema);

const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const educationSchema = new mongoose.Schema(
  {
    userDetailsID: {
      type: ObjectId,
      ref: "user"
    },
    educationLevel:
    {
      type: String,
      required: true
    },
    collegeName: {
      type: String,
      required: true
    },
    authority:
    {
      type: String,
      required: true
    },
    discipline:
    {
      type: String,
      required: true
    },
    yearOfpassout:
    {
      type: Date,
      required: true
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("education", educationSchema);