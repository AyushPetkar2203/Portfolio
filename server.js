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
    service: "Gmail",
    auth: {
      user: "ayushpetkar2203@gmail.com",
      pass: "cunphwxnwqmupvnt",
    },
  });
  let mailOptions = {
    from: email,
    to: "ayushpetkar2203@gmail.com",
    subject: `${name} want's to connect with you`,
    text: `Hi Ayush,\n This is ${name}, ${message}.\n\nMy emailId is ${email} \n\nThanks Regards\n${name}`,
  };

  try {
    let info = transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Done with mail." });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});
