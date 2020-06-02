const express = require('express');
const router = express.Router();

//Product - CRUD
const Product = require('../models/Product');

//CREATE
router.post('/api/products', (req, res) => {
    const { body } = req;
    const newProduct = new Product(body);

    newProduct.save()
    .then( dbRes => res.status(201).json(dbRes))
    .catch( err => res.status(400).json(err));
});

//READ (ALL)
router.get('/api/products', (req, res) => {
    Product.find()
    .then( products => res.status(200).json( products ))
    .catch( err => res.status(404).json(err));
});

//READ (ONE)
router.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    Product.findById(id)
    .then(product => {
        if(!product) res.status(404).json({messeage: 'product not fount' })
        res.status(200).json( product )
    })
    .catch( err => console.log( err ));
});

//UPDATE
router.patch('/api/products/:id', ( req, res ) => {
    const { id } = req.params;
    const { body } = req;

    Product.findByIdAndUpdate( id, body, {new: true } )
    .then( updateProduct => res.status(200).json( updateProduct ))
    .catch( err => res.status(404).json( err ));
});

//DELETE
router.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;

    Product.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch( err => res.status(404).json( err ));
});


module.exports = router;