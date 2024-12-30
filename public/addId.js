const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, 'GambiaConnectDB.json');

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonArray = JSON.parse(data);

    // Add a Description field to each object if it doesn't exist
    const updatedArray = jsonArray.map(item => {
      if (!item.hasOwnProperty('Description')) {
        item.Description = ''; // Add a default empty string or any default value you prefer
      }
      return item;
    });

    // Convert the updated array back to JSON
    const updatedJson = JSON.stringify(updatedArray, null, 2);

    // Write the updated JSON back to the file
    fs.writeFile(filePath, updatedJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Description field added successfully!');
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});