const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");

app.use(express.static(__dirname+"/public"));
app.use(cors());

io.on("connection", (client) => {
    console.log("Connected...")
    client.emit("acknowledgement", {message : "You are connected now."});
    client.on("MessageToServer", ({chatterName, message}) => {
        console.log(chatterName + " says : ", message);
        client.emit("MessageToClient", {chatterName : "Me", message});
        client.broadcast.emit("MessageToClient", {chatterName, message});
    })
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname+"/public/socket.index.html");
})

server.listen(9091, () => console.log("Server started at PORT: 9091"))

process.argv.environment