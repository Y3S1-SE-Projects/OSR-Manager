const router = require("express").Router();
const Category = require("../controllers/Category.Ctrl");

//Create category route
router.post("/", Category.createCategory);

//Get category route
router.get("/", Category.getCategory);

module.exports = router;
