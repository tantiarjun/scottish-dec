const Donation = require('../models/donation');

// Create new donation
exports.createDonation = async (req, res) => {
  try {
    const { title, description, end_date, donation_type, goal_amount } = req.body;
    const imageUrl = req.file.location; // get image url from s3

    const donation = new Donation({
      title,
      description,
      end_date,
      donation_type,
      goal_amount,
      image_url: imageUrl,
    });

    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create donation', details: error.message });
  }
};

//getalldonation

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find({});
    res.status(200).json(donations);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching donations', details: error.message });
  }
};


//getdonationbyid
exports.getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.status(200).json(donation);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching donation', details: error.message });
  }
};


//deleteDonation
exports.deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndDelete(req.params.id);
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' });
    }
    res.status(200).json({ message: 'Donation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting donation', details: error.message });
  }
};

// Updatedonation
exports.updateDonation = async (req, res) => {
    try {
      const { title, description, end_date, donation_type, goal_amount } = req.body;
      const updateData = { title, description, end_date, donation_type, goal_amount };
  
      if (req.file) {
        updateData.image_url = req.file.location; 
      }
  
      const donation = await Donation.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
      if (!donation) {
        return res.status(404).json({ error: 'Donation not found' });
      }
      res.status(200).json(donation);
    } catch (error) {
      res.status(400).json({ error: 'Error updating donation', details: error.message });
    }
  };
