const express = require('express');
const path = require('path');
const app = express();

// Static files serving from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Send the index.html when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
