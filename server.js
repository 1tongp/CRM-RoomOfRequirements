// open new Terminal
// "npm install" to download the node_modules
// "npm run server" to run the server and connect to database

const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const app = require('express')()
const server = require('http').createServer(app);
const cors = require('cors')
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

const path = require('path');
// lead routes in
const staff = require('./routes/staff');
const customer = require('./routes/customer');
const order = require('./routes/order');
const team = require('./routes/team');
const calendar = require('./routes/calendar');
const history = require('./routes/history');

// functions for chat update
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

app.use(cors());

app.use(bodyParser.json());

// chat
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

// connect mongoose new method
const database = require('./config/keys').mangoURL;
mongoose
    .connect(database, 
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Successfully Connected to MongoDB!! Start run the request!"))
    
// use the routes
app.use('/staff', staff);
app.use('/customer',customer);
app.use('/order', order);
app.use('/team', team);
app.use('/calendar', calendar);
app.use('/history', history);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('customer/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'customer', 'build', 'index.html'));
    });
}

server.listen(process.env.PORT || 8080,() => {
    console.log(`App now listening at http://localhost:8080`)
})

module.exports = app;


