const RecruiterModel = require('./trash models/recruiterInfoModel');


const createRecruiter =async  (req, res) => {

  try{
    const rData = req.body
    const {fname , lname , title, email, phone,companyName, companyType, companyLocation, jobPost, status} =  rData;

     if(!fname ||!lname ||!title ||!email ||!phone ||!companyName) return res.status(400).send({message: 'Please fill all the fields'});
     if (!(["Mr", "Mrs", "Miss"].includes(title))) return res.status(400).send({ status: false, message: "title should be 'Mr' or 'Mrs' or 'Miss'" })
     
     const uniqueEmail = await RecruiterModel.findOne({email : email});
     if(uniqueEmail) return res.status(400).send({status: false, message : "Email Already Exists"});

     const uniquePhone = await RecruiterModel.findOne({phone : phone});
     if(uniquePhone) return res.status(400).send({status: false, message : "Phone Already Exists"})

     const recruiterData = await RecruiterModel.create(rData);
     return res.status(201).send({status: true, message : "Recruiter Data Created", data : recruiterData});
       
  }
  catch(err){
       return res.status(500).send({ status: false, Error: err.message })
       
  }

}

module.exports.createRecruiter = createRecruiter
