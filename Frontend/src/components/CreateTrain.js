import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import CreateTrainStyle from "../Style/CreateTrainStyle.css"

export default class CreateTrain extends Component {
  state = {
    id: "",
    trainName: "",
    origin: "",
    destination: "",
    fare: "",
    isTrainCreated: false
  };

  handleTrainid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ id: value.toUpperCase() });
    }
  };


  handleTrainName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value.toUpperCase() });
    }
  };

  handleOrigin = event => {
    const { value } = event.target;
    this.setState({ origin: value.toUpperCase() });
  };

  handleDestination = event => {
    const { value } = event.target;
    this.setState({ destination: value.toUpperCase() });
  };
  handleFare = event => {
    const { value } = event.target;
    this.setState({ fare: value.toUpperCase() });
  };



  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      id: this.state.id,
      trainName: this.state.trainName,
      origin: this.state.origin,
      destination: this.state.destination,
      fare: this.state.fare,

    };

    axios
      .post(
        "http://localhost:8090/search/addTrain",
        newTrain
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Train created successfully");
    this.setState({
      id: "",
      trainName: "",
      origin: "",
      destination: "",
      fare: "",

      isTrainCreated: true
    });
  };
  render() {
    if (this.state.isTrainCreated) {
      return <Redirect to="/trainlist" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>

        <div className="contain">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Create Train</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Code</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainid"
                        onChange={this.handleTrainid}
                        value={this.state.id}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Source</label><br/>
                      <select
                        class="browser-default custom-select mb-4"
                        id="quantity"
                        onChange={this.handleOrigin}
                        required
                      >
                        <option value="" disabled selected>
                         ---From---
                        </option>

                        <option value="Naukot"> Naukot </option>
                        <option value="	Raokhanwala"> 	Usmanwala</option>
                        <option value="Taqipur"> Taqipur </option>
                        <option value="Nawaz Dahri "> Nawaz Dahri </option>


                      </select>
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Destination</label><br/>
                      <select
                        class="browser-default custom-select mb-4"
                        id="quantity"
                        onChange={this.handleDestination}
                        required
                      >
                        <option value="" disabled selected>
                          ---To---
                        </option>
                        <option value="Faisalabad"> Faisalabad </option>
                        <option value="Hafizabad"> Hafizabad </option>
                        <option value="Mianwali"> Mianwali </option>
                        <option value="Dinga"> Dinga </option>



                      </select>

                      <div className="fare">
                        <div className="fare-col">
                          <label htmlFor="inputState">Fare</label>
                          <input
                            id="from"
                            className="form-control"
                            onChange={this.handleFare}
                            value={this.state.fare}
                            required
                          />

                        </div>

                      </div>
                    </div>
                    <br />
                    <div>
                      <button data-testid="search-button"
                        type="submit"
                        value="createTicket"
                        className="btn btn-dark btn-lg btn-block"
                      >
                        Create Train
                      </button><br></br>
                      <p>Delete Train?<Link to="/delTrain"> Click Here</Link></p>
                    </div>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}