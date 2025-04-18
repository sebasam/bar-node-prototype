const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const path = require('path')

const app = express();
const db = require('./config/db')
const server = http.createServer(app);
const io = socketIo(server);
const api = require('./routes/api.routes')

const orderController = require('./controllers/order.controller')

db()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

orderController.initializeSocket(io);
io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

app.use('/', api);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});