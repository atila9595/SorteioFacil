import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const credentials = require('../../credencial.json');

const serviceAccountAuth = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const spreadsheetId = "11bPCeJkw45lYAwPCdmLg93Q4PAUPmyN0DZPrpXv060M";

const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets


export default doc;