const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const transporter = require("./lib/mailer");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json("This is my api").status(200);
});

app.post("/send-email", (req, res) => {
  const { name, text } = req.body;

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.MAIL_ADDRESS, // sender address
      to: process.env.SENDER_ADDRESS, // list of receivers
      subject: `Wishing from ${name}`, // Subject line
      text,
    });

    return res
      .json({
        success: true,
        message: "Email Send Successfully",
        data: info.messageId,
      })
      .status(200);
  }
  main().catch(console.error);
});

app.post("/send-gift", (req, res) => {
  const { name, url } = req.body;

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.MAIL_ADDRESS,
      to: process.env.SENDER_ADDRESS,
      subject: `${name} sent you a gift.`, // Subject line
      html: `<p> Hey I sent you a gift for you. Hope you like it.  </p>
        <img src="${process.env.APP_URL}/${url}" alt="gift" width="400" height="300" />
        `,
    });

    return res
      .json({
        success: true,
        message: "Gift Send Successfully",
        data: info.messageId,
      })
      .status(200);
  }
  main().catch(console.error);
});
const port = process.env.PORT;
app.listen(port || 4000, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
