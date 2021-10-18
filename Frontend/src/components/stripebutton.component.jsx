import React from "react";
 import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router";

const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_vODJNnbks07dYxUhFM5MOXJs00N7hKX8qb";
  const stripePrice = price * 100;
  const history = useHistory()

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8083/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        
        history.push(`/thankyou`)
      })
      
      
      .catch((error) => {
        console.log(error);
        alert("Payment Success");
      });
      
  };


  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="Your Payment"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5h1YSkEYrgWC2CJfk8bAuMhzd0kkMZ-RLw&usqp=CAU"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;