// controllers/masonryConfigController.js

const MasonryConfig = require('../models/masonryConfigModel');

// Function to get the masonry configuration
const getMasonryConfig = async (req, res) => {
  try {
    // Check if there's an existing config
    let config = await MasonryConfig.findOne();
    if (!config) {
      // If no config exists, create a default one with columns set to 3
      config = new MasonryConfig({ columns: 3 });
      await config.save();
    }
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update the masonry configuration
const updateMasonryConfig = async (req, res) => {
  const { columns } = req.body;
  
  try {
    let config = await MasonryConfig.findOne();
    if (!config) {
      config = new MasonryConfig({ columns });
    } else {
      config.columns = columns;
    }
    await config.save();
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMasonryConfig,
  updateMasonryConfig,
};
