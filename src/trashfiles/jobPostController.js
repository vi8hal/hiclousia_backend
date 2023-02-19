const JobPostModel = require('./trash models/jobPostModel');

const createJobPost =async (req, res) => {

  try{
    const jData = req.body
    const {jobRole , experience , primarySkills, secondarySkills, jobDiscription, education, location, sector} =  jData;

    if (!jobRole || !experience || !primarySkills || !secondarySkills || !jobDiscription || !education || !location || !sector) return res.status(400).send({ message: 'Please fill all the fields' });
    
    const jobPostData = await JobPostModel.create(jData);
    return res.status(201).send({status: true, message : "Job Post Data Created", data : jobPostData});
       
  }
  catch(err){
       return res.status(500).send({ status: false, Error: err.message })
       
  }

}

module.exports.createJobPost = createJobPost;
