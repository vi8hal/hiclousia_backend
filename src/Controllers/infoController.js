const educationModel = require("../Models/InfoModels/educationModel.js");
const experienceModel=require("../Models/InfoModels/experienceModel");
const projectsModel = require("../Models/InfoModels/projectsModel");

const skillsModel=require("../Models/InfoModels/skillsModel")
const userModel=require("../Models/userModel")


const educationInfo = async function (req, res) {
    try {

        const { userDetailsID, School, Degree, Grade, yearOfpassout } = req.body;
        const data = educationModel.create(req.body)

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

};
const experienceInfo = async function (req, res) {
    try {
        const data = experienceModel.create(req.body)

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

};
const projectInfo = async function (req, res) {
    try {
        const data = projectsModel.create(req.body)

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}
const skillsInfo = async function (req, res) {
    try {
        const data = skillsModel.create(req.body)

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}
const personalInfo = async function (req, res) {
    try {
        const id=req.params.id
        const user=userModel.find(id)
        const educationData=educationModel.find(id)
        const experienceData=experienceModel.find(id)
        const skills=skillsModel.find(id)

        const data={...user,...educationData,...experienceData,...skills }
        return res.status(200).send({ status: true, data })


    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}



module.exports = { personalInfo,educationInfo,skillsInfo,experienceInfo,projectInfo }