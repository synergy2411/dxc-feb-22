const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", (client) => {
    console.log("Connected...")
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

server.listen(9091, () => console.log("Server started at PORT: 9091"))