import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const { id } = req.query; // The index of the element to modify

  if (req.method === 'PUT') {
    try {
      const formData = req.body; // The new data to update the element with
      const filePath = path.join(process.cwd(), 'public', 'GambiaConnectDB.json');

      // Read the JSON file
      const fileContent = await fs.readFile(filePath, 'utf8');
      const dataArray = JSON.parse(fileContent);

      // Convert id to an integer
      const index = parseInt(id, 10);

      // Validate the index
      if (isNaN(index) || index < 0 || index >= dataArray.length) {
        return res.status(400).json({ error: 'Invalid id' });
      }

      // Update the object at the specified index
      dataArray[index] = { ...dataArray[index], ...formData };

      // Write the updated data back to the JSON file
      await fs.writeFile(filePath, JSON.stringify(dataArray, null, 2), 'utf8');

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