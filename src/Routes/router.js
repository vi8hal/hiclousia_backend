
const userController = require("../Controllers/userController")
const infoController=require("../Controllers/infoController")
const express = require("express");
const router = express.Router();


router.post("/create",userController.register)
router.post("/login",userController.loginUser)

router.post("/experience",infoController.experienceInfo)
router.post("/education",infoController.educationInfo)
router.post("/project",infoController.projectInfo)
router.post("/skill",infoController.skillsInfo)

router.get("/personal/:id",infoController.personalInfo)



module.exports = router;
