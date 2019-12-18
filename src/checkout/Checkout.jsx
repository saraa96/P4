import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

 const CURRENCY = 'EUR';
const fromEuroToCent = amount => amount * 100;
const successPayment = data => {
  console.log(data)
};
const errorPayment = data => {
  alert('Payment Error');
};
const onToken = (amount, description) => token =>
  axios.post("http://localhost:3000/charges",
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);


const Checkout = ({ name, description, amount }) =>
<StripeCheckout
  name={name}
  description={description}
  amount={fromEuroToCent(amount)}
  token={onToken(amount, description)}
  currency={CURRENCY}
  stripeKey={"pk_test_LmWgf1qH8AankF78WbG9i0dB00PhewcJ5A"}
/>
export default Checkout;
