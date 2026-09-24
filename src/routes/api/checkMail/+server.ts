import { mailExists } from "$lib/server/googleSheets";
import { json } from '@sveltejs/kit'

export async function POST({request}) {
    //check if mail is registered
    const {mail} = await request.json();
    const registered = await mailExists(mail);

    return json({
        registered : registered
    })
}