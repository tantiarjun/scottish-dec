const express = require("express");
const {
  sendRegistrationFormDataViaGmail,
} = require("../controllers/registrationForm");

const router = express.Router();

router.post("/", sendRegistrationFormDataViaGmail);

module.exports = router;
