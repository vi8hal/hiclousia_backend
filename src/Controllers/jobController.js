const jobModel = require("../Models/jobModel");
const Joi = require('joi');

const jobInfo = async (req, res) =>{
    try {
        const { userDetailsID, jobRole, experience, primarySkill, secondarySkills, jobDiscription, type, location, education, sector} = req.body;
        const jobSchema = Joi.object({
            userDetailsID: Joi.string().required(),
            jobRole: Joi.string().required(),
            experience: Joi.number().required(),
            primarySkills: Joi.string().required(),
            secondarySkills: Joi.string().required(),
            jobDiscription: Joi.string().required(),
            salary: Joi.number().required(),
            location: Joi.string().required(),
            education: Joi.string().required(),
            sector: Joi.string().required()
        });
        const validationResult = jobSchema.validate(req.body, { abortEarly: false });
        if (validationResult.error) {
            return res.status(400).send({ status: false, message: validationResult.error.details[0].message });
        };
        const data = await jobModel.create(req.body);
        if (data)
            return res.status(200).send({ status: true, data: data, message: 'Job-Post data created' });
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};

const searchJobs = async (req, res) => {
  try {
    const {
      jobRole,
      experience,
      primarySkills,
      secondarySkills,
      jobDescription,
      education,
      location
    } = req.query;

    const query = {};

    if (jobRole) {
      query.jobRole = { $regex: jobRole, $options: '' };
    }

    if (experience) {
      query.experience = experience;
    }

    if (primarySkills) {
      query.primarySkills = { $regex: primarySkills, $options: 'i' };
    }

    if (secondarySkills) {
      query.secondarySkills = { $regex: secondarySkills, $options: 'i' };
    }

    if (jobDescription) {
      query.jobDescription = { $regex: jobDescription, $options: 'i' };
    }

    if (education) {
      query.education = { $regex: education, $options: 'i' };
    }

    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    const jobs = await jobModel.find(query);
    if (!jobs){
      return res.status(404).json({status: false, message: "Data not found" });
    }
    return res.status(200).json({ status: true, data: jobs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

module.exports = { jobInfo,  searchJobs };
