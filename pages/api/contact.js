export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.GMAIL_EMAIL,
    to: "mail@kavin.me",
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ error: err.toString() });
    } else {
      console.log(info);
    }
  });

  return res.status(200).json({});
}
