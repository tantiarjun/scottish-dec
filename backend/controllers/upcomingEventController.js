const UpcomingEvent = require("../models/upcomingEventModel"); 
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/awsConfig");



// Create event
exports.createEvent = async (req, res) => {
  const { eventTitle, eventDate } = req.body;

  const eventImageUrl = req.file ? req.file.location : "";

  try {
    const newEvent = new UpcomingEvent({ eventTitle, eventDate, eventImageUrl });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error during upcoming event creation:", error);
    res.status(500).json({ error: "Server error during upcoming event creation" });
  }
};




// Get events
exports.getEvents = async (req, res) => {
  try {
    const events = await UpcomingEvent.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Server error during fetching upcoming events" });
  }
};




// Delete event
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await UpcomingEvent.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Upcoming Event not found" });
    }

    const fileName = event.eventImageUrl.split("/").pop();
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
    };
    await s3.send(new DeleteObjectCommand(params));

    await UpcomingEvent.findByIdAndDelete(id);

    res.status(200).json({ message: "Upcoming Event deleted successfully" });
  } catch (error) {
    console.error("Error during event deletion:", error);
    res.status(500).json({ error: "Server error during upcoming event deletion" });
  }
};



// Delete all events
exports.deleteAll = async (req, res) => {
  try {
    await UpcomingEvent.deleteMany({});
    res.status(200).json({ message: "All upcoming events have been deleted." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting upcoming events.", details: error.message });
  }
};
