var express = require("express");
var app=express();

//création serveur http
var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.use('/jquery', express.static(__dirname +'/node_modules/jquery/dist/'));

app.get('/', function(req,res,next){
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
    console.log("Client connecté");
    socket.emit('messages', 'Hello from server');
});

server.listen(3000);
