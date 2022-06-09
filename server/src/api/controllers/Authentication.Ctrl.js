const User = require("../models/User.model");
const logger = require("../../utils/logger");
const bcrypt = require("bcrypt");
const Email = require("../../utils/email");

//Register a user
const registerUser = async (req, res) => {
  try {
    logger.info(`<-- ${req.method} Request`);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      roles: req.body.roles,
    });

    const mailOption = {
      to: req.body.email,
      subject: "Regarding registering to research management system",
      text: "Successfully registered to the system",
    };

    User.create(newUser)
      .then((user) => {
        res.status(200).json(user);
        Email.sendEmailNotification(mailOption);
        logger.info(`--> ${req.method} Response`);
      })
      .catch((err) => {
        logger.error(`${err.message}`);
        return res.status(500).json(err.message);
      });
  } catch (err) {
    logger.error(`${err.message}`);
    return res.status(500).json(err.message);
  }
};

//Login a user
const loginUser = async (req, res) => {
  try {
    logger.info(`<-- ${req.method} Request`);
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong username");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerUser, loginUser };
