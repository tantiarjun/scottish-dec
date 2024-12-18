const express = require("express");
const {
  getMantra,
  updateCheckboxState,
  uploadMantra,
} = require("../controllers/mantraController.js");
const upload = require("../middleware/multerS3Config.js");

const router = express.Router();

router.post("/mantra", upload.single("photo"), uploadMantra);
router.get("/mantra", getMantra);
router.post("/update-checkbox-state", updateCheckboxState);

module.exports = router;
