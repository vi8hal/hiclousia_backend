const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const UserSchema = new mongoose.Schema({
    personalDetails: {
        type: ObjectId,
        ref: "userPersonal"
    },
    projectDetails: {
        type: ObjectId,
        ref: "userProject"
    },
    educationDetails: {
        type: ObjectId,
        ref: "userEducation"
    },
    experienceDetails: {
        type: ObjectId,
        ref: "userExperience"
    }},

    { timestamp: true }
    )
module.export = mongoose.model('userPersonal', UserSchema);