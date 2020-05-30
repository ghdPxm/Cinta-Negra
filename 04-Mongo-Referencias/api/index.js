const express = require('express');
const server = express();
const PORT = 4000;


server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
    res.json({ messege: 'Hello World..' })
});

//Products - CRUD
const Products = require('../models/Products');

//CREATE
server.post('/api/products', (req, res) => {
    const { body } = req;
    const newProduct = new Products(body);

    newProduct.save()
    .then( dbRes => res.status(201).json(dbRes))
    .catch( err => res.status(400).json(err));
});
//

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
