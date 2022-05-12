const express = require("express");
const cors= require("cors");
require('dotenv').config();
const logger = require("./utils/logger");
require("../src/utils/database.connection");
const DB_connect = require("./utils/database.connection");

const app = express();
const PORT = process.env.PORT || 4020;

app.use(express.json());
app.use(cors());
//app.use(logger.info);

app.listen(PORT, ()=>{
    logger.info(`Server is up and running on port number: ${PORT}`)
    DB_connect().then(r => {
        logger.warn("MongoDB Connecting...")
    });
})