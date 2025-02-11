const fs = require('fs');
const axios = require('axios');

// Function to send a POST request to the API endpoint
async function postDataToEndpoint(item) {
    try {
        const response = await axios.post(' https://o6qj085j71.execute-api.us-east-1.amazonaws.com/dev/items', item);
        console.log('Data posted successfully:', response.data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

// Read JSON data from file
const filePath = 'GambiaConnectDB.json';

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        let jsonData = JSON.parse(data);

        // Function to update ID with index
        function updateIDs(data) {
            data.forEach(async (item, index) => {
                item.id = index; // Replace ID with the index
                await postDataToEndpoint(item); // Post data to API endpoint
            });
        }

        // Update IDs and post data to API endpoint
        await updateIDs(jsonData);

        // Optionally, write the updated JSON back to the same file or a new file
        fs.writeFileSync('updatedGambiaConnectDB.json', JSON.stringify(jsonData, null, 2));
        console.log('Updated JSON written to updatedGambiaConnectDB.json');
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});