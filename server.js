const express = require('express');
const app = express();
const http = require ('http').Server(app);
const io = require('socket.io')(http);

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

http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});
console.log("-------- rodou--------");
