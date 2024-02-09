const express = require("express");
const router = express.Router();
require('dotenv').config();
const studentService = require('../services/userService');

const { logger } = require("../loggers/loggers");
//***************************************/
//Routes - The API routes maps to the Controllers
//***************************************/


// Define the route for creating a student
router.post('/studentCreate', async (req, res) => {
  try {
    // Call the student service to create a user
    const studentCreateResult = await studentService.createUser(req);

    // Respond with the result
    res.json(studentCreateResult);
  } catch (error) {
    // Log the error and respond with a 500 status and a meaningful error message
    logger.info(
      `(Router:) /studentCreate ,(File:) user.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later',
    });
  }
});

// Define the route for find student
router.get('/studentGet',async(req, res) => {
try {
  const studentGetResult = await studentService.getUser(req);

  // Respond with the result
  res.json(studentGetResult);
} catch (error) {
  logger.info(
    `(Router:) /studentGet ,(File:) user.js, (Error:1)` +
      " " +
      `${error} ` +
      " " +
      new Date()
  );
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong, please try again later',
  });
}
});

// Define the route for update Data student
router.put('/studentUpdate',async(req, res) => {
  try {
    const studentGetResult = await studentService.updateUser(req);
  
    // Respond with the result
    res.json(studentGetResult);
  } catch (error) {
    logger.info(
      `(Router:) /studentUpdate ,(File:) user.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later',
    });
  }
});

// Define the route for Delete Data student
router.delete('/studentDelete',async(req, res) => {
  try {
    const studentGetResult = await studentService.deleteUser(req);
  
    // Respond with the result
    res.json(studentGetResult);
  } catch (error) {
    logger.info(
      `(Router:) /studentDelete ,(File:) user.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later',
    });
  }
});

module.exports = router;