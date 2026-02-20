const nodemailer = require('nodemailer');
require("dotenv").config();

const sendMailByNodeMailer = async (data) => {
    try {
        const {email, name, organisation_name, service, message} = data;

        const messageForNodeMail = `
        <h3>New Portfolio Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organisation_name || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        `;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Tanush Patel" <${process.env.USER_EMAIL}>`,
            to: process.env.USER_EMAIL,
            subject: "New Portfolio Contact Request",
            html: messageForNodeMail,
        });

        return true;
    } catch (error) {
        console.error("Mail error:", error);
        return false;
    }
};
const sendMailByNodeMailer2 = async (data) => {
    try {
        const {email, name, organisation_name, service, message} = data;

        const messageForNodeMail = `<h3>Thank You for Contacting Us!</h3>

    <p>Dear <strong>${name}</strong>,</p>

    <p>Your information has been <strong>successfully received</strong>.  
    We will review your request and contact you shortly.</p>

    <h4>Submitted Details:</h4>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Organization:</strong> ${organisation_name || "Not provided"}</p>
    <p><strong>Service:</strong> ${service || "Not specified"}</p>
    <p><strong>Message:</strong><br/>${message}</p>

    <p>Thank you for reaching out to us.</p>

    <p>Best regards,<br/>
    <strong>Tanush Patel</strong></p>
        `;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: [email],
            subject: "Thanks for Contacting Tanush Patel",
            html: messageForNodeMail,
        });

        return true;
    } catch (error) {
        console.error("Mail error:", error);
        return false;
    }
};

module.exports = {sendMailByNodeMailer, sendMailByNodeMailer2};