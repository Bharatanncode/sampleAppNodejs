
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("Successfully connected to the Database");
  }).catch((error)=>{
    console.log("Could not connect to the database. Exiting now...", error);
})

