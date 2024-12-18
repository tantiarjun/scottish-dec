const express = require("express");
const {
  sendContactUsFormDataViaGmail,
} = require("../controllers/contactUsForm");

const router = express.Router();

router.post("/", sendContactUsFormDataViaGmail);

module.exports = router;
