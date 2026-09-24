import { codeExists } from "$lib/server/googleSheets";
import { json } from '@sveltejs/kit'

export async function POST({request}) {
    //check if mail is registered
    const {mail} = await request.json();
    const codeGenerated = await codeExists(mail);

    return json({generated: codeGenerated})
}