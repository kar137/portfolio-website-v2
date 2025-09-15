
import { Resend } from "resend";

export async function handleContact(req: Request, res: Response) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY || "re_Nu8wzWPc_JMvjDPhYfnbe2UuLejiUumAH");

  try {
    await resend.emails.send({
      from: "Portfolio Contact <bistak297@gmail.com>",
      to: "bistak297@gmail.com",
      subject: `New message from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });
    res.json({ success: true });
  } catch (err: any) {
    console.error("Resend error:", err);
    res.status(500).json({ error: err && err.message ? err.message : "Failed to send email" });
  }
}
