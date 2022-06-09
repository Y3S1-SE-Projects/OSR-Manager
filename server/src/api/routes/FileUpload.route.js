const router = require("express").Router();
const TemplateUploadCtrl = require("../controllers/TemplateUpload.Ctrl");
const upload = require("../../utils/multer")

//upload template file
router.post( "/template",upload.single("file"),TemplateUploadCtrl);


module.exports = router;