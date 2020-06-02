const express = require('express');
const server = express();
const PORT = 4000;


server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
    res.json({ messeage: 'Hello World..' })
});

//Products
const ProductRoutes = require('../routers/ProductRoutes');
server.use(ProductRoutes);

//Ticket
const TiecktRoutes = require('../routers/TicketRoutes');
server.use(TiecktRoutes);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
