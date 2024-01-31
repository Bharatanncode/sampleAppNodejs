const studentRepository = require("../controllers/userController"); //data access object (DAO)


async function createUser(data) {
  try {
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
    
  }

  }


  module.exports = { createUser, };