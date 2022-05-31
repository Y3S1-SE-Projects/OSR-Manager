const router = require("express").Router();
const auth = require('../controllers/Authentication.Ctrl');

//Register route
router.post("/register",auth.registerUser);

//Login route
router.post("/login", auth.loginUser);

module.exports = router;
