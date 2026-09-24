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

//register
export const POST: RequestHandler = async ({ request }) => {
    const {fullName, mail, phoneNumber} = await request.json();

	await addRegistration(fullName,mail,phoneNumber);

	return json({
		success: true,
		message: 'registration added'
	});
}