const express = require('express');
const app = express();
const io = 

// Home page
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js application! This is the home page.');
});

// Contact page
app.get('/contact', (req, res) => {
  res.send('Please contact us at support@nodejsapp.com');
});

// Support page
app.get('/support', (req, res) => {
  res.send('If you need support, please email support@nodejsapp.com');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});