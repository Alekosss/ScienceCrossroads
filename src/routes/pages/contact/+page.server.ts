import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '$env/static/private';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData(); //data is the data passed via the form
    const email = data.get('email') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `<${SMTP_USER}>`,
        to: SMTP_USER,
        replyTo: email,
        subject: subject,
        text: message,
      });

      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: 'Failed to send message.' };
    }
  }
};