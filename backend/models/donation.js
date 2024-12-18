const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
  },
  donation_type: {
    type: String,
    required: true,
  },
  goal_amount: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('Donation', donationSchema);