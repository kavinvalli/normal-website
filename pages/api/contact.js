export default function handler(req, res) {
  const formData = require("form-data");
  const Mailgun = require("mailgun.js");
  const DOMAIN = "mg.kavin.me";

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const messageData = {
    from: "Kavin Website <website@mg.kavin.me>",
    to: "mail@kavin.me, kavinvalli@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  return res.status(200).json({});
}
