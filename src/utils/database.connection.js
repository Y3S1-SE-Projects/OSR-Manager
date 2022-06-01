const mongoose = require("mongoose");
const configs = require("../config");
const logger = require("./logger");

const DB_connect = async () => {
    const URL = configs.DB_CONNECTION;

    mongoose.connect(URL).then(() => {
        logger.info("MongoDB Connection success!");
    }).catch((error)=>{
        logger.error(`${error}`)
    });

 }

module.exports = DB_connect;
