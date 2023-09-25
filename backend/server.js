const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Handle POST requests to update the sample.html file
app.post('/updateSample', (req, res) => {
  const { inputs } = req.body;

  // Create or update the sample.html file with the input data
  const filePath = path.join(__dirname, 'public', 'sample.html');
  const sampleHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Sample HTML</title>
    </head>
    <body>
      <h1>Sample HTML</h1>
      <ul>
        ${inputs.map(input => `<li>${input}</li>`).join('')}
      </ul>
    </body>
    </html>
  `;

  fs.writeFile(filePath, sampleHtml, (err) => {
    if (err) {
      console.error('Error updating sample.html:', err);
      res.status(500).json({ message: 'Error updating sample.html' });
    } else {
      // Respond with the download link
      res.status(200).json({ downloadUrl: 'sample.html' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

