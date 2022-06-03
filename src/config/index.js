require("dotenv").config();
const configs = {
    DB_CONNECTION:process.env.MONGODB_URL,
    SOCKET_PORT:process.env.PORT,
    SENDER_EMAIL:process.env.EMAIL_USER,
    SENDER_PASSWORD:process.env.EMAIL_PWD,
    CLOUD_NAME:process.env.CLOUD_NAME,
    API_KEY:process.env.API_KEY,
    API_SECRET:process.env.API_SECRET
};
module.exports = configs;
