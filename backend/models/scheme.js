const mongoose = require('mongoose');

const SchemeSchema = new mongoose.Schema({
  title: String,
  domain: String, // education, health, etc.
  description: String,
  eligibility: {
    ageMin: Number,
    ageMax: Number,
    incomeMax: Number,
    occupation: [String],
    location: [String],
  },
  deadline: Date,
  languages: [String]
});

module.exports = mongoose.model('Scheme', SchemeSchema);
