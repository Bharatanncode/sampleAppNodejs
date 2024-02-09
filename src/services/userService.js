const studentRepository = require("../controllers/userController"); //data access object (DAO)

//***************************************/
//**Services** - The services contains the database queries and returning objects or throwing errors
//***************************************/

async function createUser(studentCreatedata) {
  try {
     // Call the studentRepository to create a user
    const result = await studentRepository.createUser(studentCreatedata);
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

async function getUser(studentGetdata) {
  try {
     // Call the studentRepository to create a user
    const result = await studentRepository.getUser(studentGetdata);
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

async function updateUser(studentUpdatedata) {
  try {
     // Call the studentRepository to create a user
    const result = await studentRepository.updateUser(studentUpdatedata);
    return result; // Assuming studentRepository.createUser returns a promise
 
  } catch (error) {
    logger.info(
      `(Router:) /studentUpdate ,(File:) userService.js, (Error:1)` +
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

async function deleteUser(studentDeletedata) {
  try {
     // Call the studentRepository to create a user
    const result = await studentRepository.deleteUser(studentDeletedata);
    return result; // Assuming studentRepository.createUser returns a promise
 
  } catch (error) {
    logger.info(
      `(Router:) /studentDelete ,(File:) userService.js, (Error:1)` +
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


  module.exports = { createUser, getUser ,updateUser, deleteUser};