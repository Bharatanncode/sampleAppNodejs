const mongoose = require('mongoose');

const studentData = new mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  phoneNo:String,

});

module.exports = mongoose.model('studentSchema', studentData);