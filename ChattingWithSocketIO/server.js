const http = require('http');
const url = require('url');
const fs = require('fs');
const io = require('socket.io')(http);
const users = {}
const server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            fs.readFile(__dirname + path + '/ChattingSocket.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("page not found");
            response.end();
            break;
    }
});
server.listen(3000, () => {
    console.log("Server is running on 3000 port");
});
const l1 = io.listen(server);
l1.sockets.on('connection', function (socket) {
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });
    socket.on('send-chat-message', (message) => {
        socket.broadcast.emit('chat-message',
            { message: message, name: users[socket.id] });
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id];
    });
});