const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require("axios");
// parse application/json
app.use(bodyParser.json());
const cors = require("cors");

app.use(cors());

let count = 0;

app.use(express.static("./build/"));

// SERVER LISTENING
const server = app.listen(1337, () => {
  console.log("Server restarted...");
});

const io = require("socket.io")(server);

io.on("connection", function(socket) {
  //2
  count++;
  console.log("CONNECTED TO CLIENT SOCKET");
  socket.emit("greeting", { msg: "You have connected to socket server" }); //3
  updateConnectedUsers();
  socket.on("thankyou", function(data) {
    //7
    console.log("SOCKET.ON thankyou");
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
  socket.on("disconnect", () => {
    count--;
    updateConnectedUsers();
  });
});

const updateConnectedUsers = () => {
  io.emit("usercountchanged", { count: count }); //3
};
