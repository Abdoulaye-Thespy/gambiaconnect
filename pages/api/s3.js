// Update the handleGet function to make a GET request to the new API endpoint
async function handleGet(req, res) {
  try {
    const response = await fetch('https://o6qj085j71.execute-api.us-east-1.amazonaws.com/dev/items');
    const data = await response.json();

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}

// Update the handlePost function to make a POST request to the new API endpoint
async function handlePost(req, res) {
  const jsonData = req.body.jsonData;

  if (!jsonData) {
    return res.status(400).json({ error: 'Missing JSON data' });
  }

  try {
    const response = await fetch('https://o6qj085j71.execute-api.us-east-1.amazonaws.com/dev/items', {
      method: 'POST',
      body: JSON.stringify({ jsonData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json({ success: true, message: 'Data created successfully' });
  } catch (error) {
    console.error('Error posting data:', error);
    res.status(500).json({ error: 'Failed to post data' });
  }
}

// Update the handleDelete function to make a DELETE request to the new API endpoint
async function handleDelete(req, res) {
  try {
    const response = await fetch('https://o6qj085j71.execute-api.us-east-1.amazonaws.com/dev/items', {
      method: 'DELETE',
    });

    res.status(200).json({ success: true, message: 'Data deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data' });
  }
}

// Update the handlePut function to make a PUT request to the new API endpoint
async function handlePut(req, res) {
  const jsonData = req.body.jsonData;

  if (!jsonData) {
    return res.status(400).json({ error: 'Missing JSON data' });
  }

  try {
    const response = await fetch('https://o6qj085j71.execute-api.us-east-1.amazonaws.com/dev/items', {
      method: 'PUT',
      body: JSON.stringify({ jsonData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json({ success: true, message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Failed to update data' });
  }
}

module.exports = { handleGet, handlePost, handleDelete, handlePut };