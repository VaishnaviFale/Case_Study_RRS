import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class TicketBooking extends Component {
  state = {
    id: "",
    name: "",
    sex: "",
    age: "",
    address: "",
    creditno: "",
    bank: "",
    className: "",
    quantity: "",
    origin: "",
    destination: "",
    date: "",

    isTrainReserved: false
  };

  handlePassengerid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ id: value.toUpperCase() });
    }
  };


  handlePassengerName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ name: value.toUpperCase() });
    }
  };

  handlePassengerSex = event => {
    const { value } = event.target;
    this.setState({ sex: value.toUpperCase() });
  };

  handlePassengerAge = event => {
    const { value } = event.target;
    this.setState({ age: value.toUpperCase() });
  };
  handlhandlePassengerAddress = event => {
    const { value } = event.target;
    this.setState({ address: value.toUpperCase() });
  };

  handlhandlePassengerCreditno = event => {
    const { value } = event.target;
    this.setState({ creditno: value.toUpperCase() });
  };
  handlhandlePassengerBank = event => {
    const { value } = event.target;
    this.setState({ bank: value.toUpperCase() });
  };
  handlhandlePassengerclassName = event => {
    const { value } = event.target;
    this.setState({ className: value.toUpperCase() });
  };
  handlhandlePassengerQuantity = event => {
    const { value } = event.target;
    this.setState({ quantity: value.toUpperCase() });
  };
  handlhandlePassengerOrigin = event => {
    const { value } = event.target;
    this.setState({ origin: value.toUpperCase() });
  };
  handlhandlePassengerDestination = event => {
    const { value } = event.target;
    this.setState({ destination: value.toUpperCase() });
  };
  handlhandlePassengerDate = event => {
    const { value } = event.target;
    this.setState({ date: value.toUpperCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      id: this.state.id,
      name: this.state.name,
      sex: this.state.sex,
      age: this.state.age,
      address: this.state.address,
      creditno: this.state.creditno,
      bank: this.state.bank,
      className: this.state.className,
      quantity: this.state.quantity,
      origin: this.state.origin,
      destination: this.state.destination,
      date: this.state.date,

    };

    axios
      .post(
        "http://localhost:8091/orders/addOrder",
        newTrain
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Train Reservation done successfully");
    this.setState({
      id: "",
      name: "",
      sex: "",
      age: "",
      address: "",
      creditno: "",
      bank: "",
      className: "",
      quantity: "",
      origin: "",
      destination: "",
      date: "",

      isTrainReserved: true
    });
  };
  render() {
    if (this.state.isTrainReserved) {
      return <Redirect to="/home" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>

        <div >
          <div>
            <div >
              <h3>Book a Ticket</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div >

                  <div>
                    <label htmlFor="name">Name: </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      onChange={this.handlePassengerName}
                      value={this.state.name}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="gender">Genger</label>
                    <input
                      type="name"
                      className="form-control"
                      id="sex"
                      onChange={this.handlePassengerSex}
                      value={this.state.sex}
                      required
                    />
                  </div>

                </div>
                <br />

                <div className="col">
                  <label htmlFor="inputState">Age</label>
                  <input
                    id="from"
                    className="form-control"
                    onChange={this.handlePassengerAge}
                    value={this.state.age}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">Address</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerAddress}
                    value={this.state.address}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">Credit Card Number</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerCreditno}
                    value={this.state.creditno}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">Bank Name</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerBank}
                    value={this.state.bank}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">Class</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerclassName}
                    value={this.state.className}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">Number of Passenger</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerQuantity}
                    value={this.state.quantity}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">From</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerOrigin}
                    value={this.state.origin}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="inputState">To</label>
                  <input
                    id="to"
                    className="form-control"
                    onChange={this.handlhandlePassengerDestination}
                    value={this.state.destination}
                    required
                  />
                </div>

                <div className="fare">
                  <div className="fare-col">
                    <label htmlFor="inputState">Date</label>
                    <input type="date"
                      id="from"
                      className="form-control"
                      onChange={this.handlhandlePassengerDate}
                      value={this.state.date}
                      required
                    />
                  </div>

                  <br />
                  <br />

                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Book Ticket
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    );
  }
}