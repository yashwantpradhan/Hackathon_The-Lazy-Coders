const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  income: Number,
  occupation: String,
  location: String,
  documents: [String],
});

module.exports = mongoose.model('User', UserSchema);

