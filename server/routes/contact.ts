import sgMail from "@sendgrid/mail";
import type { Request, Response } from "express";

export async function handleContact(req: Request, res: Response) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    console.error("Contact form error: missing fields", { name, email, message });
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.SENDGRID_API_KEY || "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";
  if (!apiKey) {
    console.error("Contact form error: SENDGRID_API_KEY missing");
    return res.status(500).json({ error: "Email service misconfigured: missing API key" });
  }
  sgMail.setApiKey(apiKey);

  const msg = {
    to: "bistak297@gmail.com", // Your receiving email
    from: "Portfolio Contact <bistak297@gmail.com>", // Verified sender
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true });
  } catch (err: any) {
    console.error("SendGrid error:", err);
    res.status(500).json({ error: err && err.message ? err.message : "Failed to send email" });
  }
}
