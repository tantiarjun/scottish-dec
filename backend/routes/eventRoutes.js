const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerS3Config');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent, deleteAll } = require('../controllers/eventController');
const auth = require('../middleware/auth');

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', auth, upload.single('eventImage'), createEvent);
router.put('/:id', auth, upload.single('eventImage'), updateEvent);
router.delete('/events', auth, deleteAll);
router.delete('/:id', auth, deleteEvent);

module.exports= router;
