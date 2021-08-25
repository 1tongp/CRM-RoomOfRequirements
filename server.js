// open new Terminal
// "npm install" to download the node_modules
// "npm run server" to run the server and connect to database

const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const app = express();
const server = require('http').createServer(app);
// const io = require("socket.io")(server);
// const path = require('path');
// lead routes in
const staff = require('./routes/staff');
const customer = require('./routes/customer');
const order = require('./routes/order');
const team = require('./routes/team');

// app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send("Welcome to CRM Web App!")
})
// Bodyparser Middleware
app.use(bodyParser.json());

// io.of("api/socket").on("connection", (socket) => {
//     console.log("socket.io: User connected: ", socket.id);
//     socket.on("disconnected", () => {
//         console.log("socket.io : User disconnected: ", socket.id);
//     });
// });

// connect mongoose new method
const database = require('./config/keys').mangoURL;
mongoose
    .connect(database, 
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Successfully Connected to MongoDB!! Start run the request!"))
    
// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("Setting change streams");
//     const orderChangeStream = connection.collection("orders").watch();

//     orderChangeStream.on("change", (change) => {
//         switch(change.operationType){
//             case "insert":
//                 console.log("inseration detected at backend");
//                 const order = {
//                     _id : change.fullDocument._id,
//                     customer : change.fullDocument.customer,
//                     vendor : change.fullDocument.vendor,
//                     snacksList : change.fullDocument.snacksList,
//                     createTime : change.fullDocument.createTime
//                 };
//                 io.of("/api/socket").emit("newOrder", order);
//                 break;
            
//             case "update":
//                 console.log("update detected at backend");
//                 io.of("/api/socket").emit("updateOrder", change.documentKey._id);
//                 break;

//             case "delete":
//                 console.log("deletion detected at backend");
//                 io.of("/api/socket").emit("deleteOrder", change.documentKey._id);
//                 break;
//         }
//     })
// })

// use the routes
app.use('/staff', staff);
app.use('/customer',customer);
app.use('/order', order);
app.use('/team', team);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('customer/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'customer', 'build', 'index.html'));
//     });
// }

server.listen(process.env.PORT || 8080,() => {
    console.log(`App now listening at http://localhost:8080`)
})

module.exports = app;


