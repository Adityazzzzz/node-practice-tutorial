const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app);

const socketio = require('socket.io')
const io = socketio(server)
 
app.use(express.static('public'))

// 1. Connection - client connects with server
//   sender          receiver
// server.emit() -> server.on()




const users = new Set();

io.on("connection", (socket) => {
  console.log("A user is now connected");

  socket.on("join", (userName) => {
    users.add(userName);
    socket.userName = userName;

    io.emit("userJoined", userName);        // notify everyone
    io.emit("userList", Array.from(users)); // update list
  });

  socket.on("chatMessage", (message) => {
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    if (socket.userName) {
      console.log("User disconnected:", socket.userName);

      users.delete(socket.userName);
      io.emit("userLeft", socket.userName);
      io.emit("userList", Array.from(users));
    }
  });
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`sever running on http://localhost:${PORT}`);
})

