import { randomInt } from 'crypto';
import { json } from '@sveltejs/kit';
import { transporter } from '$lib/server/mailer';
import { db } from '$lib/server/db';
import { ConfirmationCodes } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export async function POST({ request }) {
    const { email } = await request.json();

    const code = randomInt(100000, 1000000).toString();

    await db.insert(ConfirmationCodes).values({ email, code });

    await transporter.sendMail({
        to: email,
        subject: 'Your verification code',
        text: `Your verification code is: ${code}`
    });

    return json({ success: true });
}

export async function GET({ url }) {
    const email = url.searchParams.get('email');

    if (!email) {
        return json({ error: 'no_email' }, { status: 400 });
    }

    const existing = await db.select()
        .from(ConfirmationCodes)
        .where(eq(ConfirmationCodes.email, email));

    return json({ exists: existing.length > 0 });
}