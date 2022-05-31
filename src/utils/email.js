const nodemailer = require("nodemailer");
const Email = require("../config/index");

const sendEmailNotification = (sendingOptions) => {

    //Mailbox
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Email.SENDER_EMAIL,
            pass: Email.SENDER_PASSWORD
        }
    });

    //Mail option
    const mailOptions = {
        from: Email.SENDER_EMAIL,
        to: sendingOptions.to,
        subject: sendingOptions.subject,
        text: sendingOptions.text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = {sendEmailNotification};