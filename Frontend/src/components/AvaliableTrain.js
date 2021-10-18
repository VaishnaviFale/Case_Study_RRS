import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AvaliableTrainTable from '../Style/AvaliableTrainTable.css'

class AvaliableTrain extends Component {
  constructor(props) {
    super(props)

    this.state = {

      tickets: this.props.location.state.tickets
    }
  }
  bookTicket = (ticket) => {
    this.props.history.push({
      pathname: `/myreservation`,
      state: { ticket: ticket }
    });
    console.log(ticket)
  }

  render() {
    return (
      <div>
        <div className="trainSearch"><br /><br />
          <h2>Avaliable train for you:</h2><br />
          <table id="tbAvaliable">
            <tr>
              <td>Train Code</td>
              <td>Train Name</td>
              <td>Train Starting</td>
              <td>Train Destination</td>
              <td>Train Fare (In Rs.)</td>
              <td>Action</td>
            </tr>

            <tbody>
              {
                this.state.tickets.map(
                  ticket =>
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td>{ticket.trainName}</td>
                      <td>{ticket.origin}</td>
                      <td>{ticket.destination}</td>
                      <td>{ticket.fare}</td>
                      <td><button className="btn btn-primary" onClick={() => { this.bookTicket(ticket) }}>Book</button></td>

                    </tr>
                )
              }
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

export default AvaliableTrain;