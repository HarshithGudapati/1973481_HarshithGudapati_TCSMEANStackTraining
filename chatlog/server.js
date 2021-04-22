const http = require('http');
const url = require('url');
const io = require('socket.io')(http);
const mongoConnect = require('./util/database').mongoConnect;
const chatRouter = require('./chatRouter');
const ChatMessage = require('./models/chatMessage');
const users = {}
const server = http.createServer(chatRouter.handler);
mongoConnect(() => {
    server.listen(3000, () => {
        console.log("Server is running on 3000 port");
    });
});
const listener = io.listen(server);
listener.sockets.on('connection', function (socket) {
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });
    socket.on('send-chat-message', (message) => {
        let logMsg = { name: users[socket.id], message: message };
        socket.broadcast.emit('chat-message',
            { message: message, name: users[socket.id] });
        let chatMsg_ = new ChatMessage(logMsg.name, logMsg.message);
        chatMsg_.save();
    });
    socket.on('disconnect', () => {
        console.log("User disconnected: ", users[socket.id]);
        let chatMsgs = ChatMessage.fetchMsgByUser(users[socket.id]);
        chatMsgs.then(msgs => {
            console.log(msgs);
        })
            .catch(err => {
                console.log(err);
            });
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id];
    });
});