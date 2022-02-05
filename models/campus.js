const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    age : {
        type : Number,
        required: true 
    },
    result: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Campus', campusSchema);