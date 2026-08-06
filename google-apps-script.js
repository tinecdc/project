function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const headers = ['Timestamp', 'Name', 'Attendance Status', 'Attendee Count', 'Email', 'Phone'];
    const maxAttendees = 10;

    const firstRow = sheet.getRange(1, 1, 1, headers.length + maxAttendees).getValues()[0];
    if (!firstRow.some((value) => value !== '')) {
      const headerRow = [...headers, ...Array.from({ length: maxAttendees }, (_, index) => `Attendee ${index + 1}`)];
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);
    }

    let payload = {};
    const params = e.parameter || {};

    if (params.payload) {
      try {
        payload = JSON.parse(params.payload);
      } catch (_) {
        payload = {};
      }
    } else if (e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (_) {
        payload = {
          name: params.name || '',
          attendee_names: params.attendee_names || '',
          email: params.email || '',
          phone: params.phone || ''
        };
      }
    }

    const attendeeNames = (payload.attendee_names || params.attendee_names || '')
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean);

    const attendanceStatus = payload.attendance_status || params.attendance_status || 'Attending';
    const attendeeColumns = Array.from({ length: maxAttendees }, (_, index) => attendeeNames[index] || '');

    const row = [
      new Date(),
      payload.name || params.name || '',
      attendanceStatus,
      attendeeNames.length,
      payload.email || params.email || '',
      payload.phone || params.phone || '',
      ...attendeeColumns
    ];

    const lastRowIndex = sheet.getLastRow() + 1;
    sheet.getRange(lastRowIndex, 1, 1, row.length).setValues([row]);

    return ContentService.createTextOutput(JSON.stringify({ success: true, row })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err && err.message ? err.message : String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
