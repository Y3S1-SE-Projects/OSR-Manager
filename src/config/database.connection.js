const mongoose = require("mongoose");
const configs = require("./index");
const logger = require("../utils/logger");

const DB_connect = async () => {
  const URL = configs.DB_CONNECTION;

  mongoose
    .connect(
      "mongodb+srv://root:pmtroot123@cluster0.5vkck.mongodb.net/pmtDB?retryWrites=true&w=majority"
    )
    .then(() => {
      logger.info("MongoDB Connection success!");
    })
    .catch((error) => {
      logger.error(`${error}`);
    });
};

module.exports = DB_connect;
