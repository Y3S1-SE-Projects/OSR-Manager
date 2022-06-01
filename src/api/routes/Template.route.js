const router = require("express").Router();
const TemplateCtrl = require("../controllers/Template.Ctrl");

//save template data
router.post( "/",TemplateCtrl.createTemplate);

//update template data
router.put("/:id",TemplateCtrl.updateTemplate);

//delete template data
router.delete("/:id", TemplateCtrl.deleteTemplate);

//Get all details
router.get( "/",TemplateCtrl.readAllTemplates);

//Get the count
router.get( "/count",TemplateCtrl.getCount);

//Get a specific template
router.get( "/:name",TemplateCtrl.getOneTemplate);

module.exports = router;