const User = require("../models/User");

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json(allUsers);
  } catch (e) {
    res.status(500).send("Server Error");
  }
};
