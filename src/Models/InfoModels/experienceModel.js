const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const experienceSchema = new mongoose.Schema(
    {
        userDetailsID: {
            type: ObjectId,
            ref: "user"
        },
        status: {
            type: String,
            default: 'Active'
        },
        title: {
            type: String,
            required: true,
        },
        typeOfjobs: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        companyType: {
            type: String,
            // enum: ["MNC", "Start-Ups", "Government", "Service-Based", "Product-Based"]
        },
        companyLocation: {
            type: String,
            required: true,
        },
        skills: {
            type: [String],
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Experience", experienceSchema);