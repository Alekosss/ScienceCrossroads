import { CodeByMail } from '$lib/server/googleSheets';
import {json} from '@sveltejs/kit'

export async function POST({request}) {
    const {mail, userCode} = await request.json();
    const code = await CodeByMail(mail);

    return json({matches: (userCode === code)})
}