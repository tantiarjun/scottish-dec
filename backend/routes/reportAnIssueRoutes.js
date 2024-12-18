const express = require("express");

const {
  sendReportAnIssueFormDataViaGmail,
} = require("../controllers/reportAnIssue");

const router = express.Router();

router.post("/", sendReportAnIssueFormDataViaGmail);

module.exports = router;
