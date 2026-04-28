import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { sendEmail } from "./services/emailService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.post("/send-email", async (req, res) => {
  try {
    const { email } = req.body;

    const result = await sendEmail(
      email,
      "Welcome to Luvie",
      "<h1>Hello Blessing 👋</h1><p>Your Resend email works.</p>"
    );

    res.json({ success: true, result });

  } catch (error) {
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message
  });
}
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
