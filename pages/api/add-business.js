import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Path to your JSON file
      const filePath = path.join(process.cwd(), 'public', 'GambiaConnectDB.json');

      // Read the existing data
      const fileContent = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(fileContent);

      // Get the new business data from the request body
      const newBusiness = req.body;

      // Add the new business to the data array
      data.push(newBusiness);

      // Write the updated data back to the JSON file
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

      res.status(200).json({ message: 'Business added successfully!' });
    } catch (error) {
      console.error('Error adding business:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}