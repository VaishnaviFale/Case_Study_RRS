import React from 'react';
import Header from "../Style/Header.css"
import { Link, NavLink } from 'react-router-dom';


function TrainHeader() {
  return (
    <div className='header'>
      <NavLink to="/home" activeClassName="active">
        <h3 className="home1">Home</h3>
      </NavLink>
      <NavLink to="/trainlist" activeClassName="active">
        <h3>Train Availability</h3>
      </NavLink>
      <NavLink to="/reservation" activeClassName="active">
        <h3>Book a Ticket</h3>
      </NavLink>

      <NavLink to="/adminpage" activeClassName="active">
        <h3>Admin</h3>
      </NavLink>
      <NavLink to="/search" activeClassName="active">
        <h3>Search</h3>
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        <h3>Login</h3>
      </NavLink>

      <NavLink to="/searchByPnr" activeClassName="active">
        <h3>Search by pnr</h3>
      </NavLink>

     
    </div>
  )
}

export default TrainHeader
