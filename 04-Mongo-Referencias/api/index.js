const express = require('express');
const server = express();
const PORT = 4000;


server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
    res.json({ messeage: 'Hello World..' })
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

//READ (ALL)
server.get('/api/products', (req, res) => {
    Products.find()
    .then( products => res.status(200).json( products ))
    .catch( err => res.status(404).json(err));
});

//READ (ONE)
server.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    Products.findById(id,)
    .then(product => {
        if(!product) res.status(404).json({messeage: 'product not fount' })
        res.status(200).json( product )
    })
    .catch( err => console.log(err));
});


server.listen(PORT, () => console.log(`Listening on ${PORT}`));
