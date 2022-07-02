const mongoose = require('mongoose')

const shortURLSchema = mongoose.Schema({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true
    }
})