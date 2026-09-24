import { json, type RequestHandler } from '@sveltejs/kit';
import {getRegistrations, addRegistration} from '$lib/server/googleSheets';

//RETURNS THE REGISTRATIONS TAB A:C

export async function GET() {
	const registrations = await getRegistrations();

	return json({
		success: true,
		registrations
	});
}

export const POST: RequestHandler = async ({ request }) => {
        const {name, mail, number} = await request.json();

	await addRegistration(name,mail,number);

	return json({
		success: true,
		message: 'Test registration added'
	});
}