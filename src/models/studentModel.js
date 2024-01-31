const mongoose = require('mongoose');

const studentData = new mongoose.Schema({
  name:String,
  email:String,
  password:String,

});

module.exports = mongoose.model('studentSchema', studentData);