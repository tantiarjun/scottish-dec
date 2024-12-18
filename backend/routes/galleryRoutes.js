const express = require("express");
const upload = require("../middleware/multerS3Config.js");
const {
  getGalleryImageUrl,
  uploadImageUrlToDB,
} = require("../controllers/galleryController.js");

const router = express.Router();
router.post("/gallery", upload.single("image"), uploadImageUrlToDB);
router.get("/gallery", getGalleryImageUrl);

module.exports = router;
