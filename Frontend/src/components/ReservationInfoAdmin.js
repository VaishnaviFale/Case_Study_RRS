import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import reservationInfoStyle from '../Style/reservationInfoStyle.css'

const Train = props => (
  <tr>


    <td> {props.train.name} </td>
    <td> {props.train.sex} </td>
    <td> {props.train.age} </td>
    <td> {props.train.className} </td>
    <td> {props.train.quantity} </td>
    <td> {props.train.origin} </td>
    <td> {props.train.destination} </td>
    <td> {props.train.date} </td>
  </tr>


);
class ReservationInfoAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [] };
  }


  componentDidMount() {
    axios
      .get("http://localhost:8091/orders/findAllPass/")
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
              <th> classs </th>
              <th> Quantity </th>
              <th> Origin </th>
              <th> Destination </th>
              <th> date </th>
            </tr>
          </thead>
          <tbody>{this.reservationInfo()}</tbody>
        </table>
        <br></br>
          </div>
          );
  }
}

          export default ReservationInfoAdmin;