var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
const disscounter = 0;
const addcounter = 0;
// The require('socket.io')(http) creates a new socket.io instance attached to the http server
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
// The io.on event handler handles connection, disconnection, etc., events in it, using the socket object.
//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  //   console.log(socket.client.conn.server.clientsCount + " user conected");
  console.log(io.sockets.server.engine.clientsCount); 

  //Whenever someone disconnects this piece of code executed

  setTimeout(function () {
    socket.send(" send a message  4 seconds after connection");
    socket.emit("customEvent", {
      description: "A custom ecent named CustomEvent",
    });
  }, 4000);

  socket.on("disconnect", function () {
    // console.log(socket.client.conn.server.clientsCount + " diconnected");
    console.log(io.sockets.server.engine.clientsCount);
  });
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
