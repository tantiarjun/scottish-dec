const mongoose = require('mongoose');

const aboutBody1Schema = mongoose.Schema({
    image1_url: {
        type: String,
        required: true
    },
    image2_url: {
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

module.exports = mongoose.model('AboutBody1', aboutBody1Schema);