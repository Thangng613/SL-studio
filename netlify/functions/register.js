const { google } = require('googleapis');

const CREDENTIALS = './keys.json'; // Đặt đúng đường dẫn file JSON
const SPREADSHEET_ID = '15ylu9X5XtiLFxFqQ4SRZsk-aZnDgwoClnG0bcs_g6HA'; // Thay bằng ID của Google Sheet
const SHEET_NAME = 'TV'; // Thay bằng tên sheet

// Hàm gửi dữ liệu lên Google Sheets
async function appendToGoogleSheet(data) {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const values = [[data.concept, data.fullName, data.date, data.phone]];
  const resource = { values };

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    resource,
  });
}

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const data = JSON.parse(event.body);
    const { concept, fullName, date, phone } = data;
    
    try {
      await appendToGoogleSheet({ concept, fullName, date, phone });
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data added to Google Sheet successfully!' }),
      };
    } catch (error) {
      console.error('Error adding data to Google Sheet:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to add data to Google Sheet' }),
      };
    }
  }
  
  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
