import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { ConfirmationCodes } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export async function GET({ url }) {
    const email = url.searchParams.get('email')?.trim();
    const code = url.searchParams.get('code')?.trim();

    if (!email || !code) {
        return json({ error: 'missing_params' }, { status: 400 });
    }

    const existing = await db.select()
        .from(ConfirmationCodes)
        .where(eq(ConfirmationCodes.email, email));

    if (existing.length === 0) {
        return json({ valid: false });
    }

    return json({ valid: existing[0].code === code });
}