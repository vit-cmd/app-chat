const socket = require('socket.io');
const server = require('./app');

const io = socket(server);

io.sockets.on('connection', (socket) => {
  // console.log(socket.id);
  socket.join('room');

  // socket.emit('name', socket.id);

  // listen for chatMessage
  socket.on('chatMessage', (msg) => {
    console.log(socket.id, ': ', msg);
    socket.nsp.emit('messageTo', `[${socket.id}] ${msg}`);
  });

  // runs when clients disconnects
  socket.on('disconnect', () => {
    // console.log('Client disconnected: %s', this.socket.id);
  });
});