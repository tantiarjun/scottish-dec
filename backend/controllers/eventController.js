const Event = require('../models/eventModel'); // Ensure this path is correct
const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../config/awsConfig'); // Ensure this path is correct

// Create event
exports.createEvent = async (req, res) => {
  const {
    eventTitle,
    eventDescription,
    isPaid,
    amount,
    slots,
    eventLocation,
    eventDate,
    eventTime
  } = req.body;

  const eventImageUrl = req.file ? req.file.location : '';

  try {
    const newEvent = new Event({
      eventTitle,
      eventDescription,
      eventImageUrl,
      isPaid,
      amount,
      slots,
      eventLocation,
      eventDate,
      eventTime
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error during event creation:', error);
    res.status(500).json({ error: 'Server error during event creation' });
  }
};

// Get events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error during fetching events' });
  }
};

// Get event by id
exports.getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error during fetching event' });
  }
};

// Update an event
exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const {
    eventTitle,
    eventDescription,
    isPaid,
    amount,
    slots,
    eventLocation,
    eventDate,
    eventTime
  } = req.body;

  const eventImageUrl = req.file ? req.file.location : '';

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (req.file && event.eventImageUrl) {
      const fileName = event.eventImageUrl.split('/').pop();
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
      };
      await s3.send(new DeleteObjectCommand(params));
    }

    event.eventTitle = eventTitle || event.eventTitle;
    event.eventDescription = eventDescription || event.eventDescription;
    event.eventImageUrl = eventImageUrl || event.eventImageUrl;
    event.isPaid = isPaid !== undefined ? isPaid : event.isPaid;
    event.amount = amount !== undefined ? amount : event.amount;
    event.slots = slots || event.slots;
    event.eventLocation = eventLocation || event.eventLocation;
    event.eventDate = eventDate || event.eventDate;
    event.eventTime = eventTime || event.eventTime;

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    console.error('Error during event update:', error);
    res.status(500).json({ error: 'Server error during event update' });
  }
};

// Delete event
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const fileName = event.eventImageUrl.split('/').pop();
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
    };
    await s3.send(new DeleteObjectCommand(params));

    await Event.findByIdAndDelete(id);

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error during event deletion:', error);
    res.status(500).json({ error: 'Server error during event deletion' });
  }
};

// Delete all events
exports.deleteAll = async (req, res) => {
  try {
    await Event.deleteMany({});
    res.status(200).json({ message: 'All events have been deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting events.' });
  }
};
