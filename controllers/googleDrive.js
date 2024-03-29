import { google } from "googleapis";

const upload = async (request, response) => {
  const keyFilePath = process.env.GOOGLE_DRIVE_SERVICE_FILE;
  const scopes = ["https://www.googleapis.com/auth/drive"];

  const auth = new google.auth.GoogleAuth({ keyFile: keyFilePath, scopes });
  const driveService = google.drive({ version: "v3", auth });
  // TODO: Should be removed, moved or rewritten;
  // const fileMetaData = {
  //   name: "test_upload.txt",
  //   //"parents": [""]
  // };
  //
  // const media = {
  //   mimeType: "text/plain",
  //   body: "Test body 123",
  // };
  //
  // const googleApiResponse = await driveService.files.create({
  //   resource: fileMetaData,
  //   media,
  //   fields: "id",
  // });

  const res = await driveService.files.list({
    pageSize: 10,
    fields: "nextPageToken, files(id, name)",
  });
  const files = res.data.files;

  const file = files?.[0];

  if (file) {
    const content = await driveService.files.get({
      fileId: file.id,
      alt: "media",
    });

    response.send({ success: true, content: content.data, newItem });
  } else {
    response.status(404).json({ errorText: "File not found" });
  }
};

export default { upload };
