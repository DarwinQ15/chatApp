//condigurar node mailer para enviar correo con mi cuenta de gmail

const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'qdarwin463@gmail.com',
        pass: process.env.G_PASSWORD,
    }
});

module.exports = transporter;