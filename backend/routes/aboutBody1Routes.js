const express = require('express');
const router = express.Router();
const { getAboutBody1, updateAboutBody1 } = require('../controllers/aboutBody1Controller');
const upload = require('../middleware/multerS3Config');
const auth = require('../middleware/auth');

router.get('/', getAboutBody1);
router.put('/', auth, upload.fields([{ name: 'image1' }, { name: 'image2' }]), updateAboutBody1);

module.exports = router;
