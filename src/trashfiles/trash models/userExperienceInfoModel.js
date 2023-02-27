const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const userExperienceSchema = new mongoose.Schema(
    {userDetailsID: {
        type:ObjectId,
        ref:"userPersonal"
    },
        status : {
            type : String,
            default : 'Active'
        },
        experience : {
            type : String,
            required : true,
        },
        typeOfjobs : {
            type : String,
            required : true,
        },
        previousCompanyName : {
            type : String,
            required : true,
        },
        companyType : {
            type : String,
            enum : ["MNC", "Start-Ups", "Government", "Service-Based", "Product-Based"]
        },
        companyLocation: {
            type : String,
            required : true,
        },
        softSkillSets: {
            type : String,
            required : true,
            enum : [
                "Adaptability",
                "Communication",
                "Compromise",
                "Creative thinking",
                "Dependability",
                "Leadership",
                "Listening",
                "Work ethic",
                "Teamwork",
                "Positivity",
                "Time management",
                "Motivation",
                "Problem-solving",
                "Critical thinking",
                "Conflict resolution",
                "Negotiation"]
        },
        skills : {
            type : String,
            enum: [
                "Basic Coding",
                "Project Management", 
                "Digital Marketing",
                "Google Analytics",
                "Machine Learning",
                "Cloud Computing",
                "Blockchain",
                "App Development", 
                "Artificial Intelligence",
                "SQL(Structured Query Language)",
                "Accounting",
                "Administrative",
                "Analytics",
                "Auditing",
                "Automotive Technology",
                "Bookkeeping",
                "Budgeting",
                "Carpentry",
                "Construction",
                "Database Management",
                "Design",
                "Editing",
                "Electrical",
                "Engineering",
                "Financial",
                "Hardware",
                "Healthcare",
                "Java Script",
                "Languages",
                "Legal",
                "Manufacturing Technology",
                "Marketing Research",
                "Mechanical",
                "Medical Diagnosis",
                "Nursing",
                "Optimization",
                "Pharmaceutical Coding",
                "Pipefitting",
                "Python Programming",
                "Project Management",
                "Proposal Writing",
                "Reporting",
                "Science",
                "Software",
                "Social Media Marketing",
                "Spreadsheets",
                "Teaching",
                "Technical Writing",
                "Testing",
                "Translation",
                "Transcription",
                "Word Processing"]
        }
    },
    {
        timestamps : true
    }
)
    module.exports = mongoose.model("userExperience", userExperienceSchema);