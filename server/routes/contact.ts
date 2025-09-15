
import { Resend } from "resend";

export async function handleContact(req: Request, res: Response) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    console.error("Contact form error: missing fields", { name, email, message });
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.RESEND_API_KEY || "re_Nu8wzWPc_JMvjDPhYfnbe2UuLejiUumAH";
  if (!apiKey) {
    console.error("Contact form error: RESEND_API_KEY missing");
    return res.status(500).json({ error: "Email service misconfigured: missing API key" });
  }
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: "Portfolio Contact <bistak297@gmail.com>",
      to: "bistak297@gmail.com",
      subject: `New message from ${name}`,
  replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });
    console.log("Resend API result:", result);
    if (result.error) {
      console.error("Resend API error:", result.error);
      return res.status(500).json({ error: result.error });
    }
    res.json({ success: true });
  } catch (err: any) {
    console.error("Resend exception:", err);
    res.status(500).json({ error: err && err.message ? err.message : "Failed to send email" });
  }
}
