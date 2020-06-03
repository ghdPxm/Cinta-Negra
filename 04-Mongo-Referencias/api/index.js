const express = require('express');
const server = express();
const path = require('path');
const PORT = 4000;


server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
    //retorna un json con mensaje
    //res.json({ messeage: 'Hello World..' })
    const urlView = __dirname.slice(0,-3);
    res.sendFile(path.join(urlView + '/views/index.html'));
});

//Products
const ProductRoutes = require('../routers/ProductRoutes');
server.use(ProductRoutes);

//Ticket
const TiecktRoutes = require('../routers/TicketRoutes');
server.use(TiecktRoutes);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
