const express = require('express');
const app = express();
const server = require ("http").Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

var shortId = require('shortid');
app.use(express.static(__dirname));
//var.clients = [];

/*var io = require('socket.io')({
	transports: ['websocket'],
});

io.attach(4567);*/

io.on('connection', function(socket){
	socket.on('beep', function(){
		socket.emit('boop');
	});
});

server.listen(PORT, function(){
	console.log('listening on *:3000');
});
console.log("-------- rodou--------");
