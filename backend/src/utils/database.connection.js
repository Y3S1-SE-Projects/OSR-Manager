const mongoose = require("mongoose");
const configs = require("../config/index");
const logger = require("../utils/logger");

const DBconnect = async () => {

    const URL = configs.DB_CONNECTION;

    mongoose.connect(URL).then(() => {
        logger.info("MongoDB Connection success!");
    }).catch((error)=>{
        logger.error(`${error}`)
    });

 }

module.exports = DBconnect;