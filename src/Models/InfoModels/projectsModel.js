const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const projectsSchema = new mongoose.Schema(
    {
        userDetailsID: {
            type: ObjectId,
            ref: "user"
        },
        projectName: {
            type: String,
            required: true
        },
        startDate: {
            type: String,
           
        },
        endDate: {
            type: String,
            
        },
        organizatioName: {
            type: String,
      
        },
        description:{
            type: String,
        },
        Url:{
            type:String,
        }

    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("projects", projectsSchema);