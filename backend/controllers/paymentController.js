const stripe = require("stripe")(require("../config/keys").stripeSecretKey);
const paypal = require("paypal-rest-sdk");
const Payment = require("../models/Payment");

paypal.configure(require("../config/keys").paypal);

exports.createStripePayment = async (req, res) => {
  const { amount, currency, source } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
    });

    const payment = new Payment({
      method: "stripe",
      amount,
      currency,
      status: charge.status,
    });

    await payment.save();
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPayPalPayment = (req, res) => {
  const { amount, currency } = req.body;
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    transactions: [
      {
        amount: {
          currency,
          total: (amount / 100).toFixed(2), // PayPal expects amounts in decimal format
        },
        description: "Payment description",
      },
    ],
    redirect_urls: {
      return_url: "http://yoururl.com/success",
      cancel_url: "http://yoururl.com/cancel",
    },
  };

  paypal.payment.create(create_payment_json, async (error, payment) => {
    if (error) {
      res.status(500).json({ error: error.response });
    } else {
      for (let link of payment.links) {
        if (link.rel === "approval_url") {
          res.json({ forwardLink: link.href });
        }
      }

      const newPayment = new Payment({
        method: "paypal",
        amount,
        currency,
        status: "created",
      });

      await newPayment.save();
    }
  });
};

exports.executePayPalPayment = (req, res) => {
  const { paymentId, PayerID } = req.body;
  const execute_payment_json = {
    payer_id: PayerID,
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    async (error, payment) => {
      if (error) {
        res.status(500).json({ error: error.response });
      } else {
        const updatedPayment = await Payment.findOneAndUpdate(
          { method: "paypal", status: "created" },
          { status: payment.state },
          { new: true }
        );
        res.json(updatedPayment);
      }
    }
  );
};

exports.createEchequePayment = async (req, res) => {
  const { amount, currency, bankAccountNumber, bankRoutingNumber } = req.body;
  // Custom logic to process e-cheques goes here
  const payment = new Payment({
    method: "echeque",
    amount,
    currency,
    status: "processing",
  });

  await payment.save();
  res.json(payment);
};
