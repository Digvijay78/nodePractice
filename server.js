const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('This is the Home page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact Us page.');
});

app.get('/support', (req, res) => {
  res.sendFile(__dirname + '/support.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    const randomResponse = ['I am here to help you', 'How can I assist you?', 'Tell me more about the issue.'];
    const response = randomResponse[Math.floor(Math.random() * randomResponse.length)];
    io.emit('chat message', response);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
