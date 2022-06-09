const router = require("express").Router();
const GroupCtrl = require("../controllers/Group.Ctrl");

//save group data
router.post( "/",GroupCtrl.createGroup);

//update group data
router.put( "/",GroupCtrl.updateGroup);

//delete group data
router.put( "/",GroupCtrl.deleteGroup);

//Get all details
router.get( "/",GroupCtrl.readAllGroups);

//Get the count
router.get( "/count",GroupCtrl.getCount);

//Get a group
router.get( "/:name",GroupCtrl.getGroup);


module.exports = router;