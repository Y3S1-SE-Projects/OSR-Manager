const router = require("express").Router();
const User = require("../controllers/User.Ctrl");

//Update route
router.put("/:id", User.updateUser);

//Delete route
router.delete("/:id", User.deleteUser);

//Get route
router.get("/:id", User.getUser);

module.exports = router;
