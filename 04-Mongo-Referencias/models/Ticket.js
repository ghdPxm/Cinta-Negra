const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({

    subtotal:{
        type: Number,
        default: 0
    },
    tax:{
        type: Number,
        default: 0
    },
    total:{
        type: Number,
        default: 0
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true,
    }],
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;