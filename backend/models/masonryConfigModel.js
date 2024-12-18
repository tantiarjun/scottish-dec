const mongoose = require('mongoose');

const masonryConfigSchema = new mongoose.Schema({
  columns: {
    type: Number,
    required: true,
    default: 3,
  },
});

module.exports = mongoose.model('MasonryConfig', masonryConfigSchema);
