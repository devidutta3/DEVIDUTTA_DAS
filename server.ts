import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API endpoint for sending email via Nodemailer
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, or message.' });
    }

    // Configure transporter from environment variables or Ethereal test account fallback
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'dasdevidutta3@gmail.com';

    let transporter;

    if (smtpUser && smtpPass) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
    } else {
      // Fallback to Ethereal test account when SMTP credentials are not set in environment
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: receiverEmail,
      replyTo: email,
      subject: subject || `Portfolio Contact Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; background-color: #080B18; border-radius: 12px; border: 1px solid #293056;">
          <div style="margin-bottom: 20px;">
            <span style="background: rgba(124, 58, 237, 0.2); color: #A5B4FC; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(124, 58, 237, 0.4);">
              NEW PORTFOLIO INQUIRY
            </span>
            <h2 style="color: #ffffff; margin-top: 10px; font-size: 20px; font-weight: 800;">
              Contact Request from ${name}
            </h2>
          </div>
          
          <div style="background: #10152A; padding: 16px; border-radius: 8px; border: 1px solid #293056; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; color: #A5B4FC; font-size: 13px;"><strong>Sender Name:</strong> <span style="color: #ffffff;">${name}</span></p>
            <p style="margin: 0 0 8px 0; color: #A5B4FC; font-size: 13px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #06B6D4; text-decoration: none;">${email}</a></p>
            <p style="margin: 0; color: #A5B4FC; font-size: 13px;"><strong>Recipient:</strong> <span style="color: #ffffff;">${receiverEmail}</span></p>
          </div>

          <div style="background: #141A32; padding: 20px; border-left: 4px solid #06B6D4; border-radius: 6px;">
            <h4 style="margin: 0 0 10px 0; color: #06B6D4; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message Body:</h4>
            <p style="margin: 0; white-space: pre-wrap; color: #F8FAFC; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 11px; color: #64748b; font-family: monospace; text-align: center;">
            Automated Delivery via Nodemailer • Devidutta Das AI/ML Portfolio
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    let previewUrl: string | false = false;
    if (!smtpUser || !smtpPass) {
      previewUrl = nodemailer.getTestMessageUrl(info);
    }

    return res.status(200).json({
      success: true,
      message: 'Email processed and sent successfully via Nodemailer!',
      messageId: info.messageId,
      previewUrl,
    });
  } catch (err: any) {
    console.error('Nodemailer error:', err);
    return res.status(500).json({
      error: 'Failed to send message via Nodemailer.',
      details: err.message || String(err),
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
