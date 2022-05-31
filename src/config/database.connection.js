const mongoose = require("mongoose");
const configs = require("./index");
const logger = require("../utils/logger");

const DB_connect = async () => {

    const URL = configs.DB_CONNECTION;

    mongoose.connect(URL).then(() => {
        logger.info("MongoDB Connection success!");
    }).catch((error)=>{
        logger.error(`${error}`)
    });

 }

module.exports = DB_connect;