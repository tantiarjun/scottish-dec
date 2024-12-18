const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const charge = await stripe.charges.create({
  amount: 2000, // amount in cents
  currency: 'usd',
  source: 'tok_visa', // token obtained with Stripe.js
  description: 'Charge for test@example.com',
});