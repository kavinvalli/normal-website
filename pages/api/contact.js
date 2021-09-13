export default function handler(req, res) {
  // let nodemailer = require("nodemailer");
  // require("dotenv").config();
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "smtp.gmail.com",
  //   auth: {
  //     user: process.env.GMAIL_EMAIL,
  //     pass: process.env.GMAIL_PASSWORD,
  //   },
  //   secure: true,
  // });

  // const mailData = {
  //   from: process.env.GMAIL_EMAIL,
  //   to: ["mail@kavin.me", "kavinvalli@gmail.com"],
  //   subject: `Message from ${req.body.name}`,
  //   text: req.body.message,
  //   html: `<div>${req.body.message}</div>`,
  // };

  // transporter.sendMail(mailData, (err, info) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(200).json({ error: err.toString() });
  //   } else {
  //     console.log(info);
  //   }
  // });
  const mailgun = require("mailgun-js");
  const DOMAIN = 'mg.kavin.me';
  const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});
  const data = {
    from: 'Kavin Website <website@mg.kavin.me>',
    to: 'mail@kavin.me, kavinvalli@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  };
  mg.messages().send(data, function (_, body) {
    console.log(body);
  });

  return res.status(200).json({});
}
