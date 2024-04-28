const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");
const socketIo = require('socket.io');
const cors = require('cors'); // Import the cors library

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle user registration with username
  socket.on('register', (username) => {
    socket.username = username;
    io.emit('chat message', {
      message: `${username} has joined the chat`
    });
  });

  // Handle chat messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', {
      username: socket.username,
      message: msg
    });
  }
  );

  // Handle user disconnection
  socket.on('disconnect', () => {
    if (socket.username) {
      io.emit('chat message', {
        username: socket.username,
        message: `${socket.username} has left the chat`
      });
    }
    console.log('User disconnected');
  });
});



const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};



const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3100");
app.set("port", port);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);





