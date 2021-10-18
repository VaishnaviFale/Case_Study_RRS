import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import reservationInfoStyle from '../Style/reservationInfoStyle.css'

const Train = props => (
  <tr>


    <td> {props.train.name} </td>
    <td> {props.train.sex} </td>
    <td> {props.train.age} </td>
    <td> {props.train.address} </td>
    {/* <td> {props.train.creditno} </td>
    <td> {props.train.bank} </td> */}
    <td> {props.train.className} </td>
    <td> {props.train.quantity} </td>
    <td> {props.train.origin} </td>
    <td> {props.train.destination} </td>
    <td> {props.train.date} </td>
    <td> <b>{props.train.pnr} </b></td>
  </tr>


);
class ReservationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [] };
  }


  componentDidMount() {
    axios
      .get("http://localhost:9001/orders/findAllPass/")
      .then(response => {
        this.setState({ details: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  reservationInfo() {
    return this.state.details.map(function (currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }



  render() {
    return (
      <div>
        <h3> Your Information </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>

              <th> Name </th>
              <th> Sex </th>
              <th> Age </th>
              <th> Address </th>
              {/* <th> Credit </th>
              <th> Bank </th> */}
              <th> classs </th>
              <th> Quantity </th>
              <th> Origin </th>
              <th> Destination </th>
              <th> date </th>
              <th> PNR </th>
            </tr>
          </thead>
          <tbody>{this.reservationInfo()}</tbody>
        </table>
        <br></br>
        <div className="flex">
          <h4>Cancle Reservation..? </h4>
          <Link className="flex1" to="/delTicket" >
            <button className="button button3">
              <h3>Cancle</h3>
            </button><br />
          </Link>
        </div>
        
        <div className="flex">
        <br /><h4>Process the payment </h4>
        <Link className="flex2" to="/checkout" >
          <button className="button button4">
            <h3>Pay</h3>
          </button>
        </Link>
      </div>
      </div>
    );
  }
}

export default ReservationInfo;