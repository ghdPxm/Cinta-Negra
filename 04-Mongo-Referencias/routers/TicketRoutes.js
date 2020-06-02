const express = require('express');
const router = express.Router();

//Ticket - CRUD
const Ticket = require('../models/Ticket');

//CREATE
router.post('/api/tickets', (req, res) => {
    const { body } = req;
    const newTicket = new Ticket(body);

    newTicket.save()
    .then( dbRes => res.status(201).json(dbRes))
    .catch( err => res.status(400).json(err));
});

//READ (ALL)
router.get('/api/tickets', (req, res) => {
    Ticket.find()
    .then( tickets => res.status(200).json( tickets ))
    .catch( err => res.status(404).json(err));
});

//READ (ONE)
router.get('/api/tickets/:id', (req, res) => {
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
router.patch('/api/tickets/:id', ( req, res ) => {
    const { id } = req.params;
    const { body } = req;

    Ticket.findByIdAndUpdate( id, body, {new: true } )
    .then( updateTicket => res.status(200).json( updateTicket ))
    .catch( err => res.status(404).json( err ));
});

//DELETE
router.delete('/api/tickets/:id', (req, res) => {
    const { id } = req.params;

    Ticket.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch( err => res.status(404).json( err ));
});



module.exports = router;