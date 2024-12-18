const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerS3Config');
const auth = require('../middleware/auth');
const { getEvents, createEvent, deleteEvent, deleteAll } = require('../controllers/upcomingEventController');

router.get('/', getEvents );
router.post('/', auth, upload.single('eventImage'), createEvent);
router.delete('/all', auth, deleteAll);
router.delete('/:id', auth, deleteEvent);

module.exports = router;