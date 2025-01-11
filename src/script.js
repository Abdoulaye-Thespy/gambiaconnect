const fs = require('fs');

// Function to update the JSON data
function updateStatusInJson(filePath) {
  // Read the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    try {
      // Parse the JSON data
      const jsonData = JSON.parse(data);

      // Ensure jsonData is an array of objects
      if (!Array.isArray(jsonData)) {
        console.error('JSON data is not an array');
        return;
      }

      // Update the objects
      const updatedData = jsonData.map(item => {
        // Check if item is an object and doesn't have a Status field
        if (typeof item === 'object' && item !== null && !item.hasOwnProperty('Status')) {
          item.Status = 'approved';  // Add Status field
        }
        return item;  // Return the potentially modified object
      });

      // Convert the updated data back to JSON format with pretty printing
      const updatedJson = JSON.stringify(updatedData, null, 2);

      // Write the updated JSON back to the file
      fs.writeFile(filePath, updatedJson, 'utf8', (err) => {
        if (err) {
          console.error('Error writing to the file:', err);
          return;
        }
        console.log('File successfully updated!');
      });

    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });
}

// Path to your JSON file
const filePath = 'GambiaConnectDB.json';

// Call the function to update the JSON file
updateStatusInJson(filePath);