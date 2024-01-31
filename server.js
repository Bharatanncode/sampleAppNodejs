const express = require('express');
const cors = require('cors');
const Env = require('dotenv').config();//Env...
const DB = require('./src/config/dBconnect');//Database...
const Studentdata = require('./src/routes/user');

const app = express();
app.use(cors());
app.use(express.json());

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use('/api',Studentdata);


const port = process.env.PORT || 8085;
app.listen(port, 'localhost');
console.log('Server running at http://localhost:'+ port);
