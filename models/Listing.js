const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        max: 1
    },
    category: {
        type: String,
        ref: 'Category',
        max: 1
    }
},{timestamps: true})

// model

const Listing = mongoose.model('Listing',listingSchema)

module.exports = Listing