const Image = require('../models/imageModel');
const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../config/awsConfig');

// Upload multiple images
exports.uploadImages = async (req, res) => {
  const title = req.body.title || ''; // Default title empty string if not provided

  if (!req.files) {
    return res.status(400).json({ error: 'No files uploaded' });
  }

  try {
    const images = req.files.map(file => ({
      title,
      imageUrl: file.location, // S3 URL
    }));

    const newImages = await Image.insertMany(images);
    res.status(201).json(newImages);
  } catch (error) {
    console.error('Error during image upload:', error);
    res.status(500).json({ error: 'Server error during image upload' });
  }
};

// Fetch images
exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    console.error('Error during fetching images:', error);
    res.status(500).json({ error: 'Server error during fetching images' });
  }
};

// Delete image
exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Extract the file name from the URL
    const fileName = image.imageUrl.split('/').pop();

    // Delete the file from S3
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
    };
    await s3.send(new DeleteObjectCommand(params));   //DeleteObjectCommand

    // Delete the record from MongoDB
    await Image.findByIdAndDelete(id);

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error during deleting image:', error);
    res.status(500).json({ error: 'Server error during deleting image' });
  }
};
