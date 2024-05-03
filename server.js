const express = require("express")
const socket = require('socket.io')
const app = express();
const http = require("http")
const expressHTTPServer = http.createServer(app);
const io = new socket.Server(expressHTTPServer)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

expressHTTPServer.listen(3000, () => {
    console.log("Server is running on port @3000")
})