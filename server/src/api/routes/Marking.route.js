const router = require("express").Router();
const MarkingCtrl = require("../controllers/Marking.Ctrl");

//save template data
router.post( "/",MarkingCtrl.createMarking);

//update template data
router.put("/:id",MarkingCtrl.updateMarking);

//delete template data
router.delete("/:id", MarkingCtrl.deleteMarking);

//Get all details
router.get( "/",MarkingCtrl.readAllMarkings);

//Get the count
router.get( "/count",MarkingCtrl.getCount);

//Get a specific template
router.get( "/:name",MarkingCtrl.getOneMarking);

module.exports = router;