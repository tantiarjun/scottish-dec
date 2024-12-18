const express = require('express');
const router = express.Router();
const storyController = require('../controllers/homepageStoryController');
const upload = require('../middleware/multerS3Config');
const auth = require('../middleware/auth');

router.get('/', storyController.getHomepageStory);
router.put('/', auth, upload.fields([{ name: 'image1' }, { name: 'image2' }]), storyController.updateHomepageStory);

module.exports = router;