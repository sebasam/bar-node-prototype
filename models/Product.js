const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    aviable: {
        type: Boolean,
        default: true
    },
    existences: {
        type: Number,
        required: true,
        min: [0, 'Product cannot be negative']
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
