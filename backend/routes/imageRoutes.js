const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerS3Config');
const { uploadImages, getImages, deleteImage } = require('../controllers/imageController');
const auth = require('../middleware/auth');



router.get('/', getImages);
router.post('/upload', auth, upload.array('images', 15), uploadImages);
router.delete('/:id', auth, deleteImage);

module.exports = router;
