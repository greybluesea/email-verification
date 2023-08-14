const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.BESTMAIL_ADDRESS,
    pass: process.env.BESTMAIL_SECRET,
  },
});

export default transporter;
