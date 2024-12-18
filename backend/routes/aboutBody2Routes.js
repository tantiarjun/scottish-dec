const express = require('express');
const router = express.Router();
const { getAboutBody2, updateAboutBody2 } = require('../controllers/aboutBody2Controller');
const upload = require('../middleware/multerS3Config');
const auth = require('../middleware/auth');

router.get('/', getAboutBody2);
router.put('/', auth,  upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'image4' }]), updateAboutBody2);

module.exports = router;
