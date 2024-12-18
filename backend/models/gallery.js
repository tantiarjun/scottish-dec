const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("gallery", gallerySchema);
