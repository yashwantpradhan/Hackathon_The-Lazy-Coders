const goverSchemes =[
    {
      "schemeName": "Udaan Yojana",
      "ageMin": 17,
      "ageMax": 24,
      "income": 180000,
      "occupation": "Student",
      "location": {
        "city": "Delhi",
        "state": "Delhi"
      },
      "cast": "obc",
      "gender": "female",
      "education": "12th",
      "eligibility": "12th Pass",
      "deadline": "2025-08-20",
      "language": "Hindi",
      "documentRequirement": {
        "adharNumber": true,
        "panCard": false,
        "markSheet": true,
        "renewals": false
      }
    },
    {
      "schemeName": "Kisan Vikas Nidhi",
      "ageMin": 25,
      "ageMax": 55,
      "income": 120000,
      "occupation": "Farmer",
      "location": {
        "city": "Gaya",
        "state": "Bihar"
      },
      "cast": "sc",
      "gender": "male",
      "education": "8th",
      "eligibility": "Minimum 8th Pass",
      "deadline": "2025-09-15",
      "language": "Hindi",
      "documentRequirement": {
        "adharNumber": true,
        "panCard": true,
        "markSheet": false,
        "renewals": true
      }
    },
    {
      "schemeName": "Mahila Shakti Scheme",
      "ageMin": 21,
      "ageMax": 40,
      "income": 250000,
      "occupation": "Self-employed",
      "location": {
        "city": "Bhopal",
        "state": "Madhya Pradesh"
      },
      "cast": "genral",
      "gender": "female",
      "education": "graduate",
      "eligibility": "Graduate",
      "deadline": "2025-11-30",
      "language": "English",
      "documentRequirement": {
        "adharNumber": true,
        "panCard": true,
        "markSheet": true,
        "renewals": true
      }
    },
    {
      "schemeName": "Shiksha Sahayata Yojana",
      "ageMin": 15,
      "ageMax": 20,
      "income": 100000,
      "occupation": "Student",
      "location": {
        "city": "Raipur",
        "state": "Chhattisgarh"
      },
      "cast": "st",
      "gender": "male",
      "education": "10th",
      "eligibility": "10th Pass",
      "deadline": "2025-07-10",
      "language": "Hindi",
      "documentRequirement": {
        "adharNumber": true,
        "panCard": false,
        "markSheet": true,
        "renewals": false
      }
    },
    {
      "schemeName": "Rozgar Guarantee Scheme",
      "ageMin": 18,
      "ageMax": 35,
      "income": 220000,
      "occupation": "Unemployed",
      "location": {
        "city": "Ahmedabad",
        "state": "Gujarat"
      },
      "cast": "obc",
      "gender": "male",
      "education": "12th",
      "eligibility": "12th Pass",
      "deadline": "2025-10-05",
      "language": "Gujarati",
      "documentRequirement": {
        "adharNumber": true,
        "panCard": true,
        "markSheet": true,
        "renewals": true
      }
    }
  ]

  export const getGoverSchemes =()=>{
    const data = JSON.parse(goverSchemes)
    console.log(data);
    
  }
  