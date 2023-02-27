const educationModel = require("../Models/InfoModels/educationModel.js");
const experienceModel=require("../Models/InfoModels/experienceModel");
const projectsModel = require("../Models/InfoModels/projectsModel");

const skillsModel=require("../Models/InfoModels/skillsModel")
const userModel=require("../Models/userModel")


const educationInfo = async function (req, res) {
    try {

        const { userDetailsID, School, Degree, Grade, yearOfpassout } = req.body;

        const data = await educationModel.create(req.body)
        console.log(data)
        return res.status(200).send({ status: true, data:data })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

};
const experienceInfo = async function (req, res) {
    try {
        const data = await experienceModel.create(req.body)
        return res.status(200).send({ status: true, data:data })


    } catch (err) {
        res.status(500).send({ status: false, message: err.message ,data: data })
    }

};
const projectInfo = async function (req, res) {
    try {
        const data = await projectsModel.create(req.body)
        return res.status(200).send({ status: true, data:data })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}
const skillsInfo = async function (req, res) {
    try {
        const data = await skillsModel.create(req.body)
        return res.status(200).send({ status: true, data:data })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}
const personalInfo = async function (req, res) {
    try {
    
        const id=req.params.id
        
        const user=await userModel.find({_id:id})
        const educationData=await educationModel.find({userDetailsID:id})
        const experienceData=await experienceModel.find({userDetailsID:id})
        const skills=await skillsModel.find({userDetailsID:id})

        const data={user,educationData,experienceData,skills }
        return res.status(200).send({ status: true, data:data })


    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}



module.exports = { personalInfo,educationInfo,skillsInfo,experienceInfo,projectInfo }