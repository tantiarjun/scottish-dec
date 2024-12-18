const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/stripe", paymentController.createStripePayment);
router.post("/paypal", paymentController.createPayPalPayment);
router.post("/paypal/execute", paymentController.executePayPalPayment);
router.post("/echeque", paymentController.createEchequePayment);

module.exports = router;
