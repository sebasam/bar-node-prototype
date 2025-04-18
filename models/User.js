const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    billingCycle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BillingCycle'
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);