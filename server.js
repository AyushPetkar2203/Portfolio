import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});

app.get("/mail", (req, res) => {
  res.send("Mail Send");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.post("/sendMail", (req, res) => {
  const { email, name, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ayushpetkar2203@gmail.com",
      pass: "cunphwxnwqmupvnt",
    },
  });
  console.log("From email----> " + email);

  let mailOptions = {
    from: "ayushpetkar2203@gmail.com",
    to: email,
    subject: "no-reply@ayushpetkar2203@gmail.com",
    text: `Hi ${name},\n\n This is Ayush, I have recevied your mail, I will reply back on your mail shortly.\n\nThank you for getting connected with me \n\n This is system generated mail, please do not reply to this mail.`,
  };

  let mailOptionCC={
    from: "ayushpetkar2203@gmail.com",
    to:"ayushpetkar2203@gmail.com",
    subject:`${name} has sent you a message`,
    text:`${message}`
  }

  try {
    console.log("MailOptions----> " + mailOptions.from);

    let info = transporter.sendMail(mailOptions);
    transporter.sendMail(mailOptionCC);
    res.status(200).json({ message: "Done with mail." });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});
