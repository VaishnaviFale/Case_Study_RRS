import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_51JfMGiSEOwqu6SwCRRKVvm797A6JjXkUWDtbre4z6nDZeOs7ztst1sy7AFDeLwSlQvnR9KoO3Rs8XTyxMOTvRNcp00TSMaOGgg";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8083/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        alert("Payment Success !");    
      })
      .catch((error) => {
        console.log(error);
        alert("Payment Success .");
      });
  };

  return (
    <StripeCheckout className="PayButton"
      amount={stripePrice}
      label="Pay Now"
      name="Railway Reservation System"
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