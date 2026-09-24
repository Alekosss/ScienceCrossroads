import { transporter } from '$lib/server/mailer';
import { randomInt } from 'node:crypto';
import { json } from '@sveltejs/kit';
import { storeOTP } from '$lib/server/googleSheets.js';

//GENERATE AND SEND THE PASSWORD

export async function POST({ request }) {
    //Generate the password
    const { mail } = await request.json();

    const code = randomInt(100000, 1000000).toString();

    //store it
    await storeOTP(mail,code);

    //send it
    await transporter.sendMail({
        to: mail,
        subject: 'Your verification code',
        text: `Your verification code is: ${code}`
    });

    return json({ success: true });
}