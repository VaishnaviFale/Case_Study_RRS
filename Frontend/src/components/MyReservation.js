import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import ReservationStyle from "../Style/ReservationStyle.css"

export default class MyReservation extends Component {
  state = {
    name: "",
    sex: "",
    age: "",
    address: "",
    className: "",
    quantity: "",
    date:"",
    isTrainCreated: false
  };

 
  handleName = event => { //PassengerName
    const { value } = event.target;
    if (value != null) {
      this.setState({ name: value.toUpperCase() });
    }
  };

  handleSex = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ sex: value.toUpperCase() });
    }
  };
  handleAge = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ age: value.toUpperCase() });
    }
  };
  handleAddress = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ address: value.toUpperCase() });
    }
  };
 
  handleClassName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ className: value.toUpperCase() });
    }
  };
  handleQuantity = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ quantity: value.toUpperCase() });
    }
  };
  handleDate = event => {
    const { value } = event.target;
    this.setState({ date: value.toUpperCase() });
  };




  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      //  id: this.state.id,
      name: this.state.name,
      sex: this.state.sex,
      age: this.state.age,
      address: this.state.address,
      className: this.state.className,
      quantity: this.state.quantity,
      date:this.state.date,


    };




    axios
      .post(
        "http://localhost:8091/orders/addOrder",
        newTrain
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("To confirm your booking please proceed with the payment.");
    this.setState({
      //    id: "",
      trainName: "",
      sex: "",
      age: "",
      address: "",
      className: "",
      quantity: "",
      date:"",


      isTrainCreated: true
    });
  };
  render() {
    if (this.state.isTrainCreated) {
      return <Redirect to="/Myreservationinfo/${pnr}" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        <body>
        <div className="contain">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Reservation</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                    <div className="col">
                      <label htmlFor="trainName">Passenger Name</label>
                      <input
                        type="name" placeholder="Enter your name"
                        className="form-control"
                        id="name"
                        onChange={this.handleName}
                        value={this.state.name}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="trainName">Gender</label><br></br>
                      <select
                        class="browser-default custom-select mb-4"
                        id="sex"
                        onChange={this.handleSex}
                        required
                      >
                        <option value="" disabled selected>
                          Choose Gender
                        </option>
                        <option value="Female"> Female </option>
                        <option value="Male"> Male </option>
                      </select>
                    </div>

                    <div className="col">
                      <label htmlFor="trainName">Age</label>
                      <input
                        type="name" placeholder="Enter your age"
                        className="form-control"
                        id="age"
                        onChange={this.handleAge}
                        value={this.state.age}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="trainName">Address</label>
                      <input
                        type="name" placeholder="Enter your address"
                        className="form-control"
                        id="address"
                        onChange={this.handleAddress}
                        value={this.state.address}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Class</label><br></br>
                      <select
                        class="browser-default custom-select mb-4"
                        id="sex"
                        onChange={this.handleClassName}
                        required
                      >
                        <option value="" disabled selected>
                          Choose Class
                        </option>
                        <option value="GENERAL"> GENERAL </option>
                        <option value="LADIES"> LADIES </option>
                      </select>
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Number of Passengers</label><br></br>
                      <select
                        class="browser-default custom-select mb-4"
                        id="quantity"
                        onChange={this.handleQuantity}
                        required
                      >
                        <option value="" disabled selected>
                          Choose number of ticket
                        </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="5"> 6 </option>

                      </select>
                    </div>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainName">Date</label>
                      <input
                        type="date" 
                        className="form-control"
                        id="creditno"
                        onChange={this.handleDate}
                        value={this.state.date}
                        required
                      />
                    </div>
                  </div>
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

                </form>
              </h5>
            </div>
          </div>
        </div>
       </body>
      </div>
    );
  }
}