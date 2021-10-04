import React, { Component } from "react";
import profileC from '../Style/profile.css'
import AuthService from '../services/AuthService ';
import AdminPortalStyle from '../Style/AdminPortalStyle.css'
import HOLIDAY from '../Images/HOLIDAY.jpg'
import user2 from '../Images/user2.png'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron"><br />
          <h2 className="mymsg">Online Railway Reservation System</h2><br />
         
        </header>
        <div className="MyDiv1">
        <img className="user" src={user2}></img><br />
        <h2 >Welcome {currentUser.username} !</h2><br />
                        <ul>
                            <li>User Name - {currentUser.username}</li>
                        </ul><br />
                        <ul>
                        <li>Email ID - {currentUser.email}</li>
                        </ul><br />
                    </div>
                    <div className="MyDiv1">
                        <img className="MyImg" src="https://i.pinimg.com/originals/b4/e6/04/b4e604a78b18f193a0679cb54c942d3e.jpg"></img>
                    </div>


      </div>
    );
  }
}