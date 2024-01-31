const studentData = require("../models/studentModel");
const logger = require("../loggers/loggers");


const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if all required fields are present
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "Please enter all the fields" });
    }

    // Create a new studentData instance
    const result = new studentData({
      name: name,
      email: email,
      password: password,
    });

    // Save the new user data
    await result.save();

    // Respond with success status and user data
    return ({ status: "success", userData: result });

  } catch (error) {
    // Log the error and respond with an error status and message
    logger.info(
      `(Router:) /studentCreate ,(File:) userController.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );
    return res.status(500).json({
      status: "error",
      message: "Something went wrong, please try again later",
    });
  }
};


const GetUser = async (req, res) => {
  const { name }  = req.body;
  try {

    let result = await studentData.find();
    if (result.length > 0) {
    // Respond with success status and user data
     return ({ status: "success", userGetdata: result });
    } else {
      return ({ message: "error", Data: "No Data Found" });
    }
  } catch (error) {
    // Log the error and respond with an error status and message
    logger.info(
      `(Router:) /studentGet ,(File:) userController.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );
    return res.status(500).json({
      status: "error",
      message: "Something went wrong, please try again later",
    });
  }
};


module.exports = { createUser ,GetUser };
