const Scheme = require('../models/scheme');

exports.checkEligibility = async (req, res) => {
  const { age, income, occupation, location } = req.body;
  const schemes = await Scheme.find({
    'eligibility.ageMin': { $lte: age },
    'eligibility.ageMax': { $gte: age },
    'eligibility.incomeMax': { $gte: income },
    'eligibility.occupation': occupation,
    'eligibility.location': location
  });
  res.json(schemes);
};
