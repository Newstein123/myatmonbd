const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service
  auth: {
    user: process.env.MAIL_ADDRESS, // Your email
    pass: process.env.MAIL_PASSWORD, // Your email password
  },
});

module.exports = transporter;
