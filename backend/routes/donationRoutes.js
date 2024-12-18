const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const upload = require('../middleware/multerS3Config');
const auth = require('../middleware/auth')

// Route to create a new donation with image upload
router.post('/', auth, upload.single('image'), donationController.createDonation);
router.get('/', donationController.getAllDonations);
router.get('/:id', donationController.getDonationById);
router.delete('/:id', auth, donationController.deleteDonation);
router.put('/:id', auth, upload.single('image'), donationController.updateDonation);

module.exports = router;
