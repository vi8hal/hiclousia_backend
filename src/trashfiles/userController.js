
// const userInfoModel = require('../Models/userInfoModel');
// // const userPersonalModel = require('./Models/userPersonalInfoModel');

// // const userEducationModel = require('./Models/userEducationInfoModel');
// // const userExperienceModel = require('./Models/userExperienceModel');
// // const userProjectModel = require('./Models/userProjectInfoModel');

// const userPortfolio = async (req, res) => {

//     const userDetails = await userInfoModel.findOne({ email: req.body.email }).populate({ path: 'personalDetails', select: ["fname", "email"] })
//     .populate({ path: "educationDetails" , select :["highestEducation" , "yearOfpassout"]}).populate({ path: "experienceDetails", select :["companyName", "startDate", "endDate"]})

// }

// module.exports.userPortfolio = userPortfolio  ;


