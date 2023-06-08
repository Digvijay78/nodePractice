var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
res.sendFile(__dirname + '/' + 'index3.html')
});

var roomno =1;
io.on('connection', function(socket){
socket.join("rooom-" + roomno);
// send this event to everyone in the room
io.sockets.in("room-"+roomno).emit('connectToRoom', "you are in room no. "+ roomno)
});

http.listen(3000, function(){
console.log('listening on localhost:3000');
});