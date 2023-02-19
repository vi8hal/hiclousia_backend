const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    email : { type: String, required: true,},
    
    personalDetails :{
        type : ObjectId , 
        ref : "userPersonal"
    },
    educationDetails : {
        type : ObjectId , 
        ref : "userEducation"
    },
    expereinceDetails : {
        type : ObjectId , 
        ref : "userExperience"
    },
    projectDetails : {
        type : ObjectId , 
        ref : "userProject"
    }
},
    { timestamps: true }
    )
    
    module.exports = mongoose.model("userPersonal", UserSchema);