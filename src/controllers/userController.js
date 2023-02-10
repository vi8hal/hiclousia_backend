const userEducationModel = require('../models/userEducationInfoModel');
const userExperienceModel = require('../models/userExperienceInfoModel');
const UserPersonalModel = require('../models/userPersonalInfoModel');
const userProjectModel = require('../models/userProjectInfoModel');


const creatUserEducation = async (req, res) => {


    try {
        const eData = req.body
        const { Authority, highestEducation, college, yearOfpassout, discipline, yearGap } = eData;

        if (!Authority || !highestEducation || !college || !yearOfpassout || !discipline) return res.status(400).send({ message: 'Please fill all the fields' });
        if (!([].includes(Authority))) return res.status(400).send({ status: false, message: "Please select value from the given option" })
        if (!([
            "Anthropology",
            "Archaeology",
            "History",
            "Linguistics and languages",
            "Philosophy",
            "Religion",
            "The arts",
            "Culinary arts",
            "Literature",
            "Performing arts",
            "Visual arts",
            "Economics",
            "Geography",
            "Interdisciplinary studies",
            "Area studies",
            "Ethnic and cultural studies",
            "Gender and sexuality studies",
            "Organizational studies",
            "Political science",
            "Psychology",
            "Sociology",
            "Biology",
            "Chemistry",
            "Earth sciences",
            "Physics",
            "Space sciences",
            "Astronomy",
            "Computer sciences",
            "Logic",
            "Mathematics",
            "Pure mathematics",
            "Applied mathematics",
            "Statistics",
            "Systems science",
            "Agriculture",
            "Architecture and design",
            "Business",
            "Divinity",
            "Education",
            "Engineering and technology",
            "Environmental studies and forestry",
            "Family and consumer science",
            "Human physical performance and recreation",
            "Journalism, media studies and communication",
            "Law",
            "Library and museum studies",
            "Medicine",
            "Military sciences",
            "Public administration",
            "Public policy",
            "Social work",
            "Transportation"].includes(discipline))) return res.status(400).send({ status: false, message: "Please select value from the given option" })


        const userEducationData = await userEducationModel.create(eData);
        return res.status(201).send({ status: true, message: "User Educational Data Created", data: userEducationData });

    }
    catch (err) {
        return res.status(500).send({ status: false, Error: err.message })

    }

}

module.export.creatUserEducation= creatUserEducation ;



//********************************************************//




const creatUserExperience = async (req, res) => {

    try {
        const userexpData = req.body
        const { status, experience, typeOfjobs, previousCompanyName, companyType, companyLocation, softSkills, skills } = ueData;

        if (!status || !experience || !typeOfjobs || !previousCompanyName || !companyLocation || !softSkills || !skills) return res.status(400).send({ message: 'Please fill all the fields' });
        if (!(["Basic Coding",
            "Project Management",
            "Digital Marketing",
            "Google Analytics",
            "Machine Learning",
            "Cloud Computing",
            "Blockchain",
            "App Development",
            "Artificial Intelligence",
            "SQL(Structured Query Language)",
            "Accounting",
            "Administrative",
            "Analytics",
            "Auditing",
            "Automotive Technology",
            "Bookkeeping",
            "Budgeting",
            "Carpentry",
            "Construction",
            "Database Management",
            "Design",
            "Editing",
            "Electrical",
            "Engineering",
            "Financial",
            "Hardware",
            "Healthcare",
            "Java Script",
            "Languages",
            "Legal",
            "Manufacturing Technology",
            "Marketing Research",
            "Mechanical",
            "Medical Diagnosis",
            "Nursing",
            "Optimization",
            "Pharmaceutical Coding",
            "Pipefitting",
            "Python Programming",
            "Project Management",
            "Proposal Writing",
            "Reporting",
            "Science",
            "Software",
            "Social Media Marketing",
            "Spreadsheets",
            "Teaching",
            "Technical Writing",
            "Testing",
            "Translation",
            "Transcription",
            "Word Processing"].includes(hardSkillSets))) return res.status(400).send({ status: false, message: "Please select value from the given option" });


        const userExperienceData = await userExperienceModel.create(userexpData);
        return res.status(201).send({ status: true, message: "User Experience Data Created", data: userExperienceData });

    }
    catch (err) {
        return res.status(500).send({ status: false, Error: err.message })

    }

}

module.export.creatUserExperience=creatUserExperience;

/*///////////////////////////////////////////////////////////////////////////////////////////////*/




const creatUserPersonal =async  (req, res) => {

  try{
    const userpersonalInfo = req.body
    const {fname , lname , title, email, city, phone, dateOfBirth, status, password} =  userpersonalInfo;

     if(!fname ||!lname ||!title ||!email ||!city||!phone ||!dateOfBirth||!status||!password) return res.status(400).send({message: 'Please fill all the fields'});
     if (!(["Mr", "Mrs", "Miss"].includes(title))) return res.status(400).send({ status: false, message: "title should be 'Mr' or 'Mrs' or 'Miss'" });
     if (!([
        "Amaravati",
        "Anantapur",
        "Chandragiri",
        "Chittoor",
        "Dowlaiswaram",
        "Eluru",
        "Guntur",
        "Kadapa",
        "Kakinada",
        "Kurnool",
        "Machilipatnam",
        "Nagarjunako",
        "Rajahmundry",
        "Srikakulam",
        "Tirupati",
        "Vijayawada",
        "Visakhapatnam",
        "Vizianagaram",
        "Yemmiganur",
        "Itanagar",
        "Dhuburi",
        "Dibrugarh",
        "Dispur",
        "Guwahati",
        "Jorhat",
        "Nagaon",
        "Sivasagar",
        "Silchar",
        "Tezpur",
        "Tinsukia",
        "Ara",
        "Barauni",
        "Begusarai",
        "Bettiah",
        "Bhagalpur",
        "Bihar Sharif",
        "Bodh Gaya",
        "Buxar",
        "Chapra",
        "Darbhanga",
        "Dehri",
        "Dinapur Nizamat",
        "Gaya",
        "Hajipur",
        "Jamalpur",
        "Katihar",
        "Madhubani",
        "Motihari",
        "Munger",
        "Muzaffarpur",
        "Patna",
        "Purnia",
        "Pusa",
        "Saharsa",
        "Samastipur",
        "Sasaram",
        "Sitamarhi",
        "Siwan",
        "Chandigarh",
        "Ambikapur",
        "Bhilai",
        "Bilaspur",
        "Dhamtari",
        "Durg",
        "Jagdalpur",
        "Raipur",
        "Rajnandgaon",
        "Daman",
        "Diu",
        "Silvassa",
        "Delhi",
        "New Delhi",
        "Madgaon",
        "Panaji",
        "Ahmadabad",
        "Amreli",
        "Bharuch",
        "Bhavnagar",
        "Bhuj",
        "Dwarka",
        "Gandhinagar",
        "Godhra",
        "Jamnagar",
        "Junagadh",
        "Kandla",
        "Khambhat",
        "Kheda",
        "Mahesana",
        "Morbi",
        "Nadiad",
        "Navsari",
        "Okha",
        "Palanpur",
        "Patan",
        "Porbandar",
        "Rajkot",
        "Surat",
        "Surendranagar",
        "Valsad",
        "Veraval",
        "Ambala",
        "Bhiwani",
        "Chandigarh",
        "Faridabad",
        "Firozpur",
        "Jhirka",
        "Gurugram",
        "Hansi",
        "Hisar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Panipat",
        "Pehowa",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Bilaspur",
        "Chamba",
        "Dalhousie",
        "Dharmshala",
        "Hamirpur",
        "Kangra",
        "Kullu",
        "Mandi",
        "Nahan",
        "Shimla",
        "Una",
        "Anantnag",
        "Baramula",
        "Doda",
        "Gulmarg",
        "Jammu",
        "Kathua",
        "Punch",
        "Rajouri",
        "Srinagar",
        "Udhampur",
        "Bokaro",
        "Chaibasa",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "Giridih",
        "Hazaribag",
        "Jamshedpur",
        "Jharia",
        "Rajmahal",
        "Ranchi",
        "Saraikela",
        "Badami",
        "Ballari",
        "Bengaluru",
        "Belagavi",
        "Bhadravati",
        "Bidar",
        "Chikkamagaluru",
        "Chitradurga",
        "Davangere",
        "Halebid",
        "Hassan",
        "Hubballi Dharwad",
        "Kalaburagi",
        "Kolar",
        "Madikeri",
        "Mandya",
        "Mangaluru",
        "Mysuru",
        "Raichur",
        "Shivamogga",
        "Shravanabelagola",
        "Shrirangapattana",
        "Tumakuru",
        "Vijayapura",
        "Alappuzha",
        "Vatakara",
        "Idukki",
        "Kannur",
        "Kochi",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Mattancheri",
        "Palakkad",
        "Thalassery",
        "Thiruvananthapuram",
        "Thrissur",
        "Kargil",
        "Leh",
        "Balaghat",
        "Barwani",
        "Betul",
        "Bharhut",
        "Bhind",
        "Bhojpur",
        "Bhopal",
        "Burhanpur",
        "Chhatarpur",
        "Chhindwara",
        "Damoh",
        "Datia",
        "Dewas",
        "Dhar",
        "Mhow",
        "Guna",
        "Gwalior",
        "Hoshangabad",
        "Indore",
        "Itarsi",
        "Jabalpur",
        "Jhabua",
        "Khajuraho",
        "Khandwa",
        "Khargone",
        "Maheshwar",
        "Mandla",
        "Mandsaur",
        "Morena",
        "Murwara",
        "Narsimhapur",
        "Narsinghgarh",
        "Narwar",
        "Neemuch",
        "Nowgong",
        "Orchha",
        "Panna",
        "Raisen",
        "Rajgarh",
        "Ratlam",
        "Rewa",
        "Sagar",
        "Sarangpur",
        "Satna",
        "Sehore",
        "Seoni",
        "Shahdol",
        "Shajapur",
        "Sheopur",
        "Shivpuri",
        "Ujjain",
        "Vidisha",
        "Ahmadnagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Bhandara",
        "Bhusawal",
        "Bid",
        "Buldhana",
        "Chandrapur",
        "Daulatabad",
        "Dhule",
        "Jalgaon",
        "Kalyan",
        "Karli",
        "Kolhapur",
        "Mahabaleshwar",
        "Malegaon",
        "Matheran",
        "Mumbai",
        "Nagpur",
        "Nanded",
        "Nashik",
        "Osmanabad",
        "Pandharpur",
        "Parbhani",
        "Pune",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sevagram",
        "Solapur",
        "Thane",
        "Ulhasnagar",
        "Vasai Virar",
        "Wardha",
        "Yavatmal",
        "Imphal",
        "Cherrapunji",
        "Shillong",
        "Aizawl",
        "Lunglei",
        "Kohima",
        "Mon",
        "Phek",
        "Wokha",
        "Zunheboto",
        "Balangir",
        "Baleshwar",
        "Baripada",
        "Bhubaneshwar",
        "Brahmapur",
        "Cuttack",
        "Dhenkanal",
        "Kendujhar",
        "Konark",
        "Koraput",
        "Paradip",
        "Phulabani",
        "Puri",
        "Sambalpur",
        "Udayagiri",
        "Karaikal",
        "Mahe",
        "Puducherry",
        "Yanam",
        "Amritsar",
        "Batala",
        "Chandigarh",
        "Faridkot",
        "Firozpur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Kapurthala",
        "Ludhiana",
        "Nabha",
        "Patiala",
        "Rupnagar",
        "Sangrur",
        "Abu",
        "Ajmer",
        "Alwar",
        "Amer",
        "Barmer",
        "Beawar",
        "Bharatpur",
        "Bhilwara",
        "Bikaner",
        "Bundi",
        "Chittaurgarh",
        "Churu",
        "Dhaulpur",
        "Dungarpur",
        "Ganganagar",
        "Hanumangarh",
        "Jaipur",
        "Jaisalmer",
        "Jalor",
        "Jhalawar",
        "Jhunjhunu",
        "Jodhpur",
        "Kishangarh",
        "Kota",
        "Merta",
        "Nagaur",
        "Nathdwara",
        "Pali",
        "Phalodi",
        "Pushkar",
        "Sawai Madhopur",
        "Shahpura",
        "Sikar",
        "Sirohi",
        "Tonk",
        "Udaipur",
        "Gangtok",
        "Gyalshing",
        "Lachung",
        "Mangan",
        "Arcot",
        "Chengalpattu",
        "Chennai",
        "Chidambaram",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kanchipuram",
        "Kanniyakumari",
        "Kodaikanal",
        "Kumbakonam",
        "Madurai",
        "Mamallapuram",
        "Nagappattinam",
        "Nagercoil",
        "Palayamkottai",
        "Pudukkottai",
        "Rajapalayam",
        "Ramanathapuram",
        "Salem",
        "Thanjavur",
        "Tiruchchirappalli",
        "Tirunelveli",
        "Tiruppur",
        "Thoothukudi",
        "Udhagamandalam",
        "Vellore",
        "Hyderabad",
        "Karimnagar",
        "Khammam",
        "Mahbubnagar",
        "Nizamabad",
        "Sangareddi",
        "Warangal",
        "Agartala",
        "Agra",
        "Aligarh",
        "Amroha",
        "Ayodhya",
        "Azamgarh",
        "Bahraich",
        "Ballia",
        "Banda",
        "Bara Banki",
        "Bareilly",
        "Basti",
        "Bijnor",
        "Bithur",
        "Budaun",
        "Bulandshahr",
        "Deoria",
        "Etah",
        "Etawah",
        "Faizabad",
        "Farrukhabad cum Fatehgarh",
        "Fatehpur",
        "Fatehpur Sikri",
        "Ghaziabad",
        "Ghazipur",
        "Gonda",
        "Gorakhpur",
        "Hamirpur",
        "Hardoi",
        "Hathras",
        "Jalaun",
        "Jaunpur",
        "Jhansi",
        "Kannauj",
        "Kanpur",
        "Lakhimpur",
        "Lalitpur",
        "Lucknow",
        "Mainpuri",
        "Mathura",
        "Meerut",
        "Mirzapur Vindhyachal",
        "Moradabad",
        "Muzaffarnagar",
        "Partapgarh",
        "Pilibhit",
        "Prayagraj",
        "Rae Bareli",
        "Rampur",
        "Saharanpur",
        "Sambhal",
        "Shahjahanpur",
        "Sitapur",
        "Sultanpur",
        "Tehri",
        "Varanasi",
        "Almora",
        "Dehra Dun",
        "Haridwar",
        "Mussoorie",
        "Nainital",
        "Pithoragarh",
        "Alipore",
        "Alipur Duar",
        "Asansol",
        "Baharampur",
        "Bally",
        "Balurghat",
        "Bankura",
        "Baranagar",
        "Barasat",
        "Barrackpore",
        "Basirhat",
        "Bhatpara",
        "Bishnupur",
        "Budge Budge",
        "Burdwan",
        "Chandernagore",
        "Darjeeling",
        "Diamond Harbour",
        "Dum Dum",
        "Durgapur",
        "Halisahar",
        "Haora",
        "Hugli",
        "Ingraj Bazar",
        "Jalpaiguri",
        "Kalimpong",
        "Kamarhati",
        "Kanchrapara",
        "Kharagpur",
        "Cooch Behar",
        "Kolkata",
        "Krishnanagar",
        "Malda",
        "Midnapore",
        "Murshidabad",
        "Nabadwip",
        "Palashi",
        "Panihati",
        "Purulia",
        "Raiganj",
        "Santipur",
        "Shantiniketan",
        "Shrirampur",
        "Siliguri",
        "Siuri",
        "Tamluk",
        "Titagarh"].includes(city))) return res.status(400).send({ status: false, message: "Please select value from the given option" })
     
     const uniqueEmail = await UserPersonalModel.findOne({email : email});
     if(uniqueEmail) return res.status(400).send({status: false, message : "Email Already Exists"});

     const uniquePhone = await UserPersonalModel.findOne({phone : phone});
     if(uniquePhone) return res.status(400).send({status: false, message : "Phone Already Exists"})

     const UserPersonalData = await UserPersonalModel.create(userpersonalInfo);
     return res.status(201).send({status: true, message : "User Personal Data Created", data : UserPersonalData});
       
  }
  catch(err){
       return res.status(500).send({ status: false, Error: err.message })
       
  }

}

module.export.creatUserPersonal=creatUserPersonal;

/*888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/



const creatuserProject =async  (req, res) => {

  try{
    const uprData = req.body
    const {fname , lname , projectTitle, email, timeDuration, authority, scope} =  uprData;

     if(!fname ||!lname ||!projectTitle ||!email ||!timeDuration ||!authority||!scope) return res.status(400).send({message: 'Please fill all the fields'});
     if (!(["Mr", "Mrs", "Miss"].includes(projectTitle))) return res.status(400).send({ status: false, message: "title should be the name of your project" })
     
     const uniqueEmail = await userProjectModel.findOne({email : email});
     if(uniqueEmail) return res.status(400).send({status: false, message : "Email Already Exists"});

     const userProjectData = await userProjectModel.create(uprData);
     return res.status(201).send({status: true, message : "User Project Data Created", data : userProjectData});
       
  }
  catch(err){
       return res.status(500).send({ status: false, Error: err.message })
       
  }

}

module.export.creatuserProject= creatuserProject;






































