const express = require('express');
const app = express();

// Registration API (POST)
app.post('/registration', (req, res) => {
  res.send('<html><body>INSIDE REGISTRATION API...</body></html>');
});


// Login API (POST)
app.post('/login', (req, res) => {
  res.send('<html><body>INSIDE LOGIN API...</body></html>');
});

// Search API (GET)
app.get('/search', (req, res) => {
  res.send('<html><body>INSIDE SEARCH API...</body></html>');
});

// Update Profile API (PUT)
app.put('/updateprofile', (req, res) => {
  res.send('<html><body>INSIDE UPDATE PROFILE API...</body></html>');
});

// Delete User API (DELETE)
app.delete('/del', (req, res) => {
  res.send('<html><body>INSIDE DELETE API...</body></html>');
});

// Start the Express server
app.listen(5000, () => {
  console.log('EXPRESS Server Started at Port No: 5000');
});