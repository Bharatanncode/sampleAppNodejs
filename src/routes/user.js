const express = require("express");
const router = express.Router();
require('dotenv').config();
const studentService = require('../services/userService');
const logger = require("../loggers/loggers");


router.post('/studentCreate', async (req,res) => {
    try {
        const studentcreate = await studentService.createUser(req);
        res.json(studentcreate);

    } catch (error) {
        logger.info(
          `(Router:) /studentCreate ,(File:) user.js, (Error:1)` +
            `${error} ` + new Date()
        );
        return res
          .status(500)
          .json({
            status: "error",
            message: " Something went wrong, please try again later ",
          });
    }
})

module.exports = router;