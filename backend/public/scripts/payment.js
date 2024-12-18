document.addEventListener("DOMContentLoaded", () => {
  // Stripe payment setup
  const stripe = Stripe("your_stripe_publishable_key");
  const elements = stripe.elements();
  const card = elements.create("card");
  card.mount("#stripe-card-element");

  // Stripe payment form submission
  const stripeForm = document.getElementById("stripe-payment-form");
  stripeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { token, error } = await stripe.createToken(card);

    if (error) {
      alert(error.message);
    } else {
      const amount = document.getElementById("stripe-amount").value;
      const currency = document.getElementById("stripe-currency").value;

      const response = await fetch("/api/payments/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount * 100,
          currency,
          source: token.id,
        }),
      });

      const data = await response.json();
      alert(
        `Payment ${data.status}: ${data.method} for ${data.amount / 100} ${
          data.currency
        }`
      );
    }
  });

  // PayPal payment form submission
  const paypalForm = document.getElementById("paypal-payment-form");
  paypalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = document.getElementById("paypal-amount").value;
    const currency = document.getElementById("paypal-currency").value;

    const response = await fetch("/api/payments/paypal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100, currency }),
    });

    const data = await response.json();
    if (data.forwardLink) {
      window.location.href = data.forwardLink;
    } else {
      alert(`Error: ${data.error}`);
    }
  });

  // E-cheque payment form submission
  const echequeForm = document.getElementById("echeque-payment-form");
  echequeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = document.getElementById("echeque-amount").value;
    const currency = document.getElementById("echeque-currency").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const bankRoutingNumber = document.getElementById(
      "bank-routing-number"
    ).value;

    const response = await fetch("/api/payments/echeque", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amount * 100,
        currency,
        bankAccountNumber,
        bankRoutingNumber,
      }),
    });

    const data = await response.json();
    alert(
      `Payment ${data.status}: ${data.method} for ${data.amount / 100} ${
        data.currency
      }`
    );
  });
});
