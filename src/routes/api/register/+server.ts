import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { registrations } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export async function GET({ url }) {
    const email = url.searchParams.get('email');
    //check if email is registered
    if (!email) {
        return json({ error: 'no_email' }, { status: 400 });
    }

    const existing = await db.select()
        .from(registrations)
        .where(eq(registrations.email, email));

    if (existing.length > 0) {
        return json({exists: true});
    }
    else {
        return json({exists: false});
    }
}

export async function POST({ request }) {
    const { email, name, phone } = await request.json();

    await db.insert(registrations).values({
        email,
        name,
        phone,
    });

    return json({ success: true });
}