import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import deleteIcon from "../../src/resources/trash-2 (1).svg";

const Train = props => (
  <tr>
    <td> {props.train.id} </td>
    <td> {props.train.trainName} </td>
    <td> {props.train.origin} </td>
    <td> {props.train.destination} </td>
    <td> {props.train.fare} </td>
    </tr>
  
  
);
class TrainList extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:8090/search/findAllTrains")
      .then(response => {
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  trainList() {
    return this.state.traintickets.map(function(currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }



  render() {
    return (
      <div>
        <h3> <u>Avaliable Trains</u> </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Train Code </th>
              <th> Train Name </th>
              <th> Source </th>
              <th> Destination </th>
              <th> Train Fare (In Rupees) </th>
            </tr>
          </thead>
          <tbody>{this.trainList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TrainList;