const studentData = require("../models/studentModel");
const logger = require("../loggers/loggers");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(404)
        .send({ message: "error", message: "Please Enter all the fields" });
    }
    const result = new studentData({
      name: name,
      email: email,
      password: password,
    });

    await result.save();
    return { status: "success", UserData: result };

  } catch (error) {
    logger.info(
      `(Router:) /studentCreate ,(File:) userController.js, (Error:1)` +
        " " +
        `${error} ` +
        " " +
        new Date()
    );
    return res.send({
      status: "error",
      massage: "Something Get Wrong, Please Try Again Latter.",
    });
  }
};

module.exports = { createUser };
