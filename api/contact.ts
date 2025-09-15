import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const msg = {
  to: 'bistakaran89@gmail.com',
    from: 'Portfolio Contact <bistak297@gmail.com>',
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('SendGrid error:', err);
    res.status(500).json({ error: err && err.message ? err.message : 'Failed to send email' });
  }
}
