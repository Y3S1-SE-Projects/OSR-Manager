const router = require("express").Router();
const TemplateUploadCtrl = require("../controllers/TemplateUpload.Ctrl");
const MarkingUploadCtrl = require("../controllers/TemplateUpload.Ctrl");
const upload = require("../../utils/multer")

//upload template file
router.post( "/template",upload.single("file"),TemplateUploadCtrl);

//upload marking scheme file
router.post( "/marking",upload.single("file"),MarkingUploadCtrl);


module.exports = router;