import { google } from 'googleapis';
import {GOOGLE_SHEET_ID,GOOGLE_SERVICE_ACCOUNT_EMAIL,GOOGLE_PRIVATE_KEY} from '$env/static/private';

const auth = new google.auth.JWT({
	email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({
	version: 'v4',
	auth
});

export async function getRegistrations() {
	const result = await sheets.spreadsheets.values.get({
		spreadsheetId: GOOGLE_SHEET_ID,
		range: 'Registrations!A:C'
	});

	return result.data.values ?? [];
}

export async function addRegistration(name: String, mail: String, number: String) {
	await sheets.spreadsheets.values.append({
		spreadsheetId: GOOGLE_SHEET_ID,
		range: 'Registrations!A:C',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [[name,mail,number]]
		}
	});
}

export async function emailExists(mail: string) {
	const result = await sheets.spreadsheets.values.get({
		spreadsheetId: GOOGLE_SHEET_ID,
		range: 'Registrations!B:B'
	});

	const emails = result.data.values ?? [];

	return emails.some(row => 
		row[0]?.trim().toLowerCase() === mail.trim().toLowerCase()
	);
}

export async function storeOTP(email: string,code: string) {
	await sheets.spreadsheets.values.append({
		spreadsheetId: GOOGLE_SHEET_ID,
		range: 'OTPs!A:B',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [[email, code]]
		}
	});
}


export async function codeMatches(mail: String, code: String) {
	const result = await sheets.spreadsheets.values.get({
		spreadsheetId: GOOGLE_SHEET_ID,
		range: 'Codes!A:B'
	});

	const rows = result.data.values ?? [];

	return rows.some(row =>
		row[0]?.trim().toLowerCase() === mail.trim().toLowerCase() &&
		row[1]?.trim() === code.trim()
	);
}