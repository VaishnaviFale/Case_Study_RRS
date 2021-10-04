import React, { Component } from "react";
import homeImg from '../Images/homeImg.jpg'
import HomeStyle from '../Style/HomeStyle.css'
import train from '../Images/train.jpg'

import UserService from '../services/UserService';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="image" >
        <header className="jumbotron">
          <div className="home">
            <img className="home_image"
              src={homeImg}></img>
            <div className="home_msg">Welcome To <br></br> Online Railway <br></br> Reservation System.</div>
          </div>
          {/* <div className="mage-cropper">
            <figcaption>Secur</figcaption>
            <img src={train} alt="avatar" class="profile-pic"></img>

          </div> */}
        </header>
      </div>
    );
  }
}