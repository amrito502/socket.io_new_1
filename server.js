const express = require("express")
const socket = require('socket.io')
const app = express();
const http = require("http")
const expressHTTPServer = http.createServer(app);
const io = new socket.Server(expressHTTPServer)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})


io.on('connection', (socket) => {
    console.log("New user connected!");
    socket.on("new-message", (msg) => {
        socket.broadcast.emit("receive_msg", msg)
    })
})




expressHTTPServer.listen(3000, () => {
    console.log("Server is running on port @3000")
})