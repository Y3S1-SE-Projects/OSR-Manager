const config = require("../../config")
const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET
});

const uploadCtrl = async (req, res) => {
    try {
        const file = req.file.path;
        await cloudinary.v2.uploader.upload(file,
            {
                folder: "marking"
            }, async (err, result) => {
                if (err) throw err;

                res.json({url: result.secure_url});
            }
        );
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
};

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};

module.exports = uploadCtrl;