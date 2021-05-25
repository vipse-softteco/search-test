const express = require("express");

const userController = require("../../controllers/user");
const router = express.Router();

// @route    GET api/users
// @desc     Get all users
// @access   Public
router.get("/", userController.getAllUsers);

module.exports = router;
