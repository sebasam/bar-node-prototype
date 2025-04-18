const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    tip: {
        type: Boolean
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);