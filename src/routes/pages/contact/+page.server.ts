import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { transporter } from '$lib/server/mailer';
import { GMAIL_USER, RECIPIENT_EMAIL } from '$env/static/private';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name    = data.get('name')?.toString().trim() ?? '';
    const email   = data.get('email')?.toString().trim() ?? '';
    const subject = data.get('subject')?.toString().trim() ?? '';
    const message = data.get('message')?.toString().trim() ?? '';

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message || !subject) {
      return fail(400, { error: 'All fields are required.', name, email, message, subject });
    }
    if (!emailRegex.test(email)) {
      return fail(400, { error: 'Invalid email address.', name, email, message, subject });
    }

    try {
      await transporter.sendMail({
        from: GMAIL_USER,          // Gmail requires "from" = your authenticated address
        replyTo: email,            // so you can reply directly to the user
        to: RECIPIENT_EMAIL,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      return { success: true };
    } catch (err) {
      console.error('Mail error:', err);
      return fail(500, { error: 'Failed to send message. Please try again.' });
    }
  },
};