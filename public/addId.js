const fs = require('fs');

// Read JSON data from file
const filePath = 'GambiaConnectDB.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        let jsonData = JSON.parse(data);

        // Function to update ID with index
        function updateIDs(data) {
            data.forEach((item, index) => {
                item.id = index; // Replace ID with the index
            });
        }

        // Update IDs
        updateIDs(jsonData);

        // Log the updated JSON
        console.log(JSON.stringify(jsonData, null, 2));

        // Optionally, write the updated JSON back to the same file or a new file
        fs.writeFileSync('updatedGambiaConnectDB.json', JSON.stringify(jsonData, null, 2));
        console.log('Updated JSON written to updatedGambiaConnectDB.json');
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});