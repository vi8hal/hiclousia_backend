const recruiterController = require("../Controllers/recruiterController");
const jobpostController = require("../Controllers/jobPostController");
const userController = require("../Controllers/userController")

const express = require("express");
const router = express.Router();

router.post('/recruiter',recruiterController.createRecruiter)
router.post('/Createjobposts', jobpostController.createJobPost)
router.post('/CreateUsePortfolio', userController.createUsePortfolio)



module.exports = router;
