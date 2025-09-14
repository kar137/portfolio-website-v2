import type { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function handleContact(req: Request, res: Response) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Configure SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: "bistak297@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });
  res.json({ success: true });
  } catch (err) {
    console.error("SMTP error:", err);
    res.status(500).json({ error: err && err.message ? err.message : "Failed to send email" });
  }
}
