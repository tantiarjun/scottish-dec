const mongoose = require('mongoose');

const aboutBody2Schema = mongoose.Schema({
    image1_url: {
        type: String,
        required: true
    },
    image2_url: {
        type: String,
        required: true
    },
    image3_url: {
        type: String,
        required: true
    },
    image4_url: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    sub_text: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('AboutBody2', aboutBody2Schema);
