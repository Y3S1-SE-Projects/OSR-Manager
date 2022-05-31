const router = require("express").Router();
const StudentCtrl = require("../controllers/Student.Ctrl");

//save student data
router.post( "/",StudentCtrl.createStudent);

//Get all details
router.get( "/",StudentCtrl.readAllStudents);

//Get the count
router.get( "/count",StudentCtrl.getCount);

//Get the usernames
router.get( "/usernames/:name",StudentCtrl.getUsernames);


module.exports = router;