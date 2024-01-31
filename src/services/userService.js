const studentRepository = require("../controllers/userController"); //data access object (DAO)


async function createUser(data) {
  try {
     // Call the studentRepository to create a user
    const result = await studentRepository.createUser(data);
    return result; // Assuming studentRepository.createUser returns a promise
 
  } catch (error) {
    logger.info(
      `(Router:) /studentCreate ,(File:) userService.js, (Error:1)` +
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

}

async function GetUser(data) {
  try {
     // Call the studentRepository to create a user
    const result = await studentRepository.GetUser(data);
    return result; // Assuming studentRepository.createUser returns a promise
 
  } catch (error) {
    logger.info(
      `(Router:) /studentGet ,(File:) userService.js, (Error:1)` +
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

}

  module.exports = { createUser, GetUser };