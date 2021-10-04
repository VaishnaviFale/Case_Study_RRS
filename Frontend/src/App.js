import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/AuthService ";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

//my cpmponents

import TrainList from "./components/TrainList";
import CreateTrain from "./components/CreateTrain";
import deleteTrain from "./components/DeleteTrain";
import Reservation from "./components/Reservation";
import SearchByPnr from "./components/SearchByPnr";
import Searching from "./components/Searching";
import AvaliableTrain from "./components/AvaliableTrain";
import CancleReservation from "./components/CancleReservation";
import AvaliablePass from "./components/AvaliablePass";
import ReservationInfo from "./components/ReservationInfo";
import Checkout from "./components/Checkout.components";
import AdminPortal from "./components/AdminPortal";
import SearchingAvaliable from "./components/SearchingAvaliable";
import AvaliableTrain2 from "./components/AvaliableTrain2";
import MyAlert from "./components/MyAlert";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <img className="train12" src="https://cdn-icons-png.flaticon.com/128/2836/2836333.png"></img>
                <Link to={"/"} className="navbar-brand">
                Pakistan Railways
                </Link>
                <div className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to={"/trainlist"} className="nav-link">
                Avaliable Trains
                </Link>
                </li>
                {/* <li className="nav-item">
                <Link to={"/searchAvaliable"} className="nav-link">
                Search Your Train
                </Link>
                </li> */}

              {showModeratorBoard && (
                <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                Moderator Board
                </Link>

                </li>
              )}

              {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )} */}
              {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/addTrain"} className="nav-link">
                Create Train
                </Link>
                </li>
              )}
              {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/delTrain"} className="nav-link">
                Remove Train
                </Link>
                </li>
              )}
              {showAdminBoard && (
                <li className="nav-item">
                <Link to={"/adminportal"} className="nav-link">
                Services
                </Link>
                </li>
              )}

              {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  My Vaishnavi User
                </Link>
              </li>
            )} */}
                </div>

              {currentUser?(
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                Hello, {currentUser.username}
                </Link>
                </li>
                <li className="nav-item">
                <Link to={"/search"} className="nav-link">
                Search Your Train
                </Link>
                </li>
                <li className="nav-item">
                <Link to={"/reservation"} className="nav-link">
                Book Ticket
                </Link>
                </li>
                <li className="nav-item">
                <Link to={"/searchByPnr"} className="nav-link">
                Enquiry
                </Link>
                </li>
                <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                LogOut
                </a>
                </li>
                </div>
              ): (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                Login
                </Link>
                </li>

                <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                Sign Up
                </Link>
                </li>

                </div>
              )}
        </nav>

        <div >
          {/*  className="container mt-3" */}
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            <Route path="/trainlist" exact component={TrainList} />
            <Route path="/addTrain" exact component={CreateTrain} />
            <Route path="/delTrain" exact component={deleteTrain} />
            <Route path="/reservation" exact component={Reservation} />
            <Route path="/searchByPnr" exact component={SearchByPnr} />
            <Route path="/search" exact component={Searching} />
            <Route path="/searchAvaliable" exact component={SearchingAvaliable} />
            <Route path="/avaliabletrain" exact component={AvaliableTrain} />
            <Route path="/avaliabletrain2" exact component={AvaliableTrain2} />
            <Route path="/reservationinfo/:pnr" exact component={ReservationInfo} />
            <Route path="/delTicket" exact component={CancleReservation} />
            <Route path="/passDetail" exact component={AvaliablePass} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/adminportal" exact component={AdminPortal} />
            <Route path="/myalert" exact component={MyAlert} />


          </Switch>
        </div>
      </div>
    );
  }
}

export default App;