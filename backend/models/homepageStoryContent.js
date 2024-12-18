const mongoose = require('mongoose'); 

//homepage story content


const homepageStoryContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sub_text: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image1_url: {
        type: String,
        required: true
    },
    image2_url: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('HomepageStoryContent', homepageStoryContentSchema);

