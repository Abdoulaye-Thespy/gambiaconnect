import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import formidable from 'formidable'
import { s3Client } from '../../utils/s3'

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
}

const BUCKET_NAME = process.env.MYAWS_S3_BUCKET_NAME
const FILE_KEY = 'GambiaConnectDB.json'

// Main handler function for all S3 operations
export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      await handlePost(req, res)
      break
    case 'GET':
      await handleGet(req, res)
      break
    case 'DELETE':
      await handleDelete(req, res)
      break
    case 'PUT':
      await handlePut(req, res)
      break
    default:
      res.setHeader('Allow', ['POST', 'GET', 'DELETE', 'PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

// Handle POST requests (Create operation)
async function handlePost(req, res) {
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form data' })
    }

    const jsonData = fields.jsonData

    if (!jsonData) {
      return res.status(400).json({ error: 'Missing JSON data' })
    }

    try {
      await s3Client.send(new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: FILE_KEY,
        Body: jsonData,
        ContentType: 'application/json',
      }))

      res.status(200).json({ success: true, message: 'File created successfully' })
    } catch (error) {
      console.error('Error uploading to S3:', error)
      res.status(500).json({ error: 'Failed to upload to S3' })
    }
  })
}

// Handle GET requests (Read operation)
async function handleGet(req, res) {
  try {
    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    const fileKey = 'GambiaConnectDB.json';

    // Log the bucket name to ensure it's being retrieved correctly
    console.log('Bucket Name:', bucketName);

    if (!bucketName) {
      throw new Error('Bucket name is not defined. Please check your environment variables.');
    }

    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
    });

    const response = await s3Client.send(command);

    // Read the stream from the response
    const streamToString = (stream) =>
      new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
      });

    const jsonData = await streamToString(response.Body);

    // Parse the JSON data and send it in the response
    res.status(200).json({ success: true, data: JSON.parse(jsonData) });
  } catch (error) {
    console.error('Error fetching object from S3:', error.message);
    res.status(500).json({ error: 'Failed to fetch object from S3', details: error.message });
  }
}

// Handle DELETE requests (Delete operation)
async function handleDelete(req, res) {
  try {
    await s3Client.send(new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: FILE_KEY,
    }))
    res.status(200).json({ success: true, message: 'File deleted successfully' })
  } catch (error) {
    console.error('Error deleting object:', error)
    res.status(500).json({ error: 'Failed to delete object' })
  }
}

// Handle PUT requests (Update operation)
async function handlePut(req, res) {
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form data' })
    }

    const jsonData = fields.jsonData

    if (!jsonData) {
      return res.status(400).json({ error: 'Missing JSON data' })
    }

    try {
      await s3Client.send(new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: FILE_KEY,
        Body: jsonData,
        ContentType: 'application/json',
      }))

      res.status(200).json({ success: true, message: 'File updated successfully' })
    } catch (error) {
      console.error('Error updating object:', error)
      res.status(500).json({ error: 'Failed to update object' })
    }
  })
}

