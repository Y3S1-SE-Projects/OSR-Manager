const configs = {
    DB_CONNECTION:process.env.MONGODB_URL,
    SOCKET_PORT:process.env.PORT,
    SENDER_EMAIL:process.env.EMAIL_USER,
    SENDER_PASSWORD:process.env.EMAIL_PWD,
}
module.exports = configs