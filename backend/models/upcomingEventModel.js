const mongoose = require('mongoose');

const upcomingEventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true
  },
  eventImageUrl: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('UpcomingEvent', upcomingEventSchema);
