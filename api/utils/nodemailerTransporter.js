import nodemailer from 'nodemailer';
import 'dotenv/config'

function nodemailerTransporter() {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    return transporter;
}

export default nodemailerTransporter