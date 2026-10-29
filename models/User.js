const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
},{timestamps: true})

// model

const User = mongoose.model('User',userSchema)

module.exports = User