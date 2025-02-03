import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from 'stream';
import { s3Client } from '../../../utils/s3'

export default async function handler(req, res) {
  const { id } = req.query; // The index of the element to modify

  if (req.method === 'PUT') {
    try {
      const formData = req.body; // The new data to update the element with
      const bucketName = process.env.MYAWS_S3_BUCKET_NAME;
      const fileKey = 'GambiaConnectDB.json';

      // Fetch the JSON file from S3
      const getObjectCommand = new GetObjectCommand({
        Bucket: bucketName,
        Key: fileKey,
      });

      const getObjectResponse = await s3Client.send(getObjectCommand);
      const streamToString = (stream) =>
        new Promise((resolve, reject) => {
          const chunks = [];
          stream.on("data", (chunk) => chunks.push(chunk));
          stream.on("error", reject);
          stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
        });

      const fileContent = await streamToString(getObjectResponse.Body);
      const dataArray = JSON.parse(fileContent);
      console.log(dataArray[3]);

      // Convert id to an integer
      const index = parseInt(id, 10);

      // Validate the index
      if (isNaN(index) || index < 0 || index >= dataArray.length) {
        return res.status(400).json({ error: 'Invalid id' });
      }

      // Update the object at the specified index
      dataArray[index] = { ...dataArray[index], ...formData };

      // Write the updated data back to the S3 bucket
      const putObjectCommand = new PutObjectCommand({
        Bucket: bucketName,
        Key: fileKey,
        Body: JSON.stringify(dataArray, null, 2),
        ContentType: 'application/json',
      });

      await s3Client.send(putObjectCommand);

      // Respond with a success message
      res.status(200).json({ message: 'Business updated successfully!' });
    } catch (error) {
      console.error('Error updating business:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle any non-PUT requests
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}