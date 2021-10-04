import React from "react";
import "./Checkout.styles.scss";
import StripeButton from "./stripebutton.component";
import png from '../Images/png.png'

import { propTypes } from "react-bootstrap/esm/Image";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="header">
        <div className="header-block">
          <span>MAKE PAYMENT</span>
        </div>
      </div>
      <div className="item-details-container">
        <div >
          <div className="img"></div>
             <img src={png} alt="item" /> 
            <div className="item-1">KARACHI EXPRESS</div>
            <div className="item-1">Quantity : 2</div>
            <div className="item-1">Price : Rs.120</div>
            <div className="total">TOTAL : Rs.240</div>
            <div className="mybutton"> <StripeButton  price="240" /></div>   
        </div>     
      </div>
     
    </div>
  );
};

export default Checkout;