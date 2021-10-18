import React from 'react';
import Header from "../Style/Header.css"
import { Link, NavLink } from 'react-router-dom';


function ThankYou() {
  return (
    <div >

      <div className="searchForm">
        <div className="center">
          <h1>Thank You</h1>
          <h4>Your payment has been successful.</h4>
          <h4>Your reservation is confirmed.</h4>

          <Link to={"/searchByPnr"} style={{ color: '#0000FF' }} >
          Click on this link to check your PNR status.
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default ThankYou
