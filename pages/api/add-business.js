import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from '../../utils/s3';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body; // The new data to add
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

      // Determine the new ID based on the last element
      const lastElement = dataArray[dataArray.length - 1];
      console.log(lastElement)
      const newId = lastElement ? lastElement.id + 1 : 1; // Start from 1 if the array is empty

      // Assign the new ID to the formData
      const newElement = { ...formData, id: newId };

      // Add the new object to the end of the array
      dataArray.push(newElement);

      // Write the updated data back to the S3 bucket
      const putObjectCommand = new PutObjectCommand({
        Bucket: bucketName,
        Key: fileKey,
        Body: JSON.stringify(dataArray, null, 2),
        ContentType: 'application/json',
      });

      await s3Client.send(putObjectCommand);

      // Respond with a success message
      res.status(200).json({ message: 'Business added successfully!', id: newId });
    } catch (error) {
      console.error('Error adding business:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}