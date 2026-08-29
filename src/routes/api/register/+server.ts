import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { registrations } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export async function POST({ request }) {
    const { email, name, phone } = await request.json();

    // Server-side duplicate check
    const existing = await db.select()
        .from(registrations)
        .where(eq(registrations.email, email));

    if (existing.length > 0) {
        return json({ error: 'already_registered' }, { status: 409 });
    }

    await db.insert(registrations).values({
        email,
        name,
        phone,
        createdAt: new Date(),
    });

    return json({ success: true });
}