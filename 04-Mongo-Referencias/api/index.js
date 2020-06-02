const express = require('express');
const server = express();
const PORT = 4000;


server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
    res.json({ messeage: 'Hello World..' })
});

//Product - CRUD
const Product = require('../models/Product');

//CREATE
server.post('/api/products', (req, res) => {
    const { body } = req;
    const newProduct = new Product(body);

    newProduct.save()
    .then( dbRes => res.status(201).json(dbRes))
    .catch( err => res.status(400).json(err));
});

//READ (ALL)
server.get('/api/products', (req, res) => {
    Product.find()
    .then( products => res.status(200).json( products ))
    .catch( err => res.status(404).json(err));
});

//READ (ONE)
server.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    Product.findById(id)
    .then(product => {
        if(!product) res.status(404).json({messeage: 'product not fount' })
        res.status(200).json( product )
    })
    .catch( err => console.log( err ));
});

//UPDATE
server.patch('/api/products/:id', ( req, res ) => {
    const { id } = req.params;
    const { body } = req;

    Product.findByIdAndUpdate( id, body, {new: true } )
    .then( updateProduct => res.status(200).json( updateProduct ))
    .catch( err => res.status(404).json( err ));
});

//DELETE
server.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;

    Product.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch( err => res.status(404).json( err ));
});

//Ticket - CRUD
const Ticket = require('../models/Ticket');

//CREATE
server.post('/api/tickets', (req, res) => {
    const { body } = req;
    const newTicket = new Ticket(body);

    newTicket.save()
    .then( dbRes => res.status(201).json(dbRes))
    .catch( err => res.status(400).json(err));
});

//READ (ALL)
server.get('/api/tickets', (req, res) => {
    Ticket.find()
    .then( tickets => res.status(200).json( tickets ))
    .catch( err => res.status(404).json(err));
});

//READ (ONE)
server.get('/api/tickets/:id', (req, res) => {
    const { id } = req.params;

    Ticket.findById(id)
    .populate('products')
    .then(ticket => {
        if(!ticket) res.status(404).json({messeage: 'ticket not fount' })
        res.status(200).json( ticket )
    })
    .catch( err => console.log( err ));
});

//UPDATE
server.patch('/api/tickets/:id', ( req, res ) => {
    const { id } = req.params;
    const { body } = req;

    Ticket.findByIdAndUpdate( id, body, {new: true } )
    .then( updateTicket => res.status(200).json( updateTicket ))
    .catch( err => res.status(404).json( err ));
});

//DELETE
server.delete('/api/tickets/:id', (req, res) => {
    const { id } = req.params;

    Ticket.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch( err => res.status(404).json( err ));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
