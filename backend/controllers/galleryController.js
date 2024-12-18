const gallery = require("../models/gallery.js");

const uploadImageUrlToDB = async (req, res, next) => {
  const { eventType } = req.body;

  try {
    const data = {
      eventType,
      imageUrl: req.file.location,
    };

    const imageData = new gallery(data);
    await imageData.save();

    res.status(201).json({
      message: "image saved to S3 and URL saved to DB",
      data: imageData,
    });
  } catch (error) {
    next(error);
  }
};

const getGalleryImageUrl = async (req, res, next) => {
  try {
    const gallerydata = await gallery.find();
    res.json(gallerydata);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadImageUrlToDB,
  getGalleryImageUrl,
};
