const studentData = require("../models/studentModel");
const logger = require("../loggers/loggers");

//***************************************/
//**Controllers** - The controllers handles all the logic behind validating request parameters, 
//query, Sending Responses with correct codes.
//***************************************/

const createUser = async (req, res) => {
  const { firstName,lastName, email,phoneNo  } = req.body;

  try {
    // Check if all required fields are present
    if (!firstName || !lastName || !email || !phoneNo) {
      return res
        .status(400)
        .json({ status: "error", message: "Please enter all the fields" });
    }

    // Create a new studentData instance
    const result = new studentData({
      firstName: firstName,
      lastName: lastName,
      email:email,
      phoneNo: phoneNo,
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

const getUser = async (req, res) => {
  // const { name }  = req.body;
  try {

    let result = await studentData.find();
    if (result.length > 0) {
    // Respond with success status and user data
     return ({ status: "success", userGetdata: result });
    } else {
      return ({ status: "error", message: "No Data Found" });
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

const updateUser = async (req, res) => {
  const { index, firstName,lastName, email ,phoneNo } = req.body; //id, name, email
  try {
    if(!index || !firstName ||!lastName || !email ||!phoneNo) {
      return res.status(400).send({ status: "error", message:"Please Enter all the fields"});
    }
    const result = await studentData.findOneAndUpdate(
      { _id: index },
      {
        $set: {
          firstName: firstName,
          lastName:lastName,
          email: email,
          phoneNo:phoneNo
        }
      },
      { new: true }
    );
    if (result) {
      return ({ status: "success", message: "Successfully updated" });
    } else {
      return ({ status: "error", user: "Student not found" });
    }
  } catch (error) {
    logger.info(
      `(Router:) /studentUpdate ,(File:) userController.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );  
    return res.status(500).json({
      status: "error",
      message: "Something went wrong, please try again later",
    });  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.body.id;

    if(!id){
      return res.status(404).send({ status: "error", message:"Please Enter id"});
    }
    const result = await studentData.findOneAndDelete({ _id: id });

    if (result) {
     return({status:"success", message: "Successfully Deleted" });
    } else {
     return({ status: "error", message: "Student not found" });
    }
  } catch (error) {
    // Log the error and respond with an error status and message
    logger.info(
      `(Router:) /studentDelete ,(File:) userController.js, (Error:1)` +
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


module.exports = { createUser ,getUser ,updateUser , deleteUser};
