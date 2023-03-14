
const userController = require("../Controllers/userController")
const infoController=require("../Controllers/infoController")
const jobController=require("../Controllers/jobController")
const express = require("express");

const router = express.Router();
const{body, validationResult} =require('express-validator');


router.post("/create",userController.register);
router.post("/login",userController.loginUser);

<<<<<<< HEAD
router.post("/experience",infoController.experienceInfo);
router.post("/education",infoController.educationInfo);
router.post("/project",infoController.projectInfo);
router.post("/skill",infoController.skillsInfo);
router.post("/job",jobController.jobInfo);

router.put("/experience/:id",infoController.updateExperienceData);
router.put("/education/:id",infoController.updateEducationData);
router.put("/skill/:id",infoController.updateSkillsData);
router.put("/job/:id",jobController.updateJobData);

router.get("/personal/:id",infoController.personalInfo);
router.get("/job",jobController.searchJobs);

=======
router.post("/experience",infoController.experienceInfo)
router.post("/education",infoController.educationInfo)
router.post("/project",infoController.projectInfo)
router.post("/skill",infoController.skillsInfo)
router.post("/job",jobController.jobInfo)
router.get("/personal/:id",infoController.personalInfo)
router.get("/job",jobController.searchJobs)
>>>>>>> b3bc4e1bc3732bcd88f79227a8023870d1a1a08a

module.exports = router;
