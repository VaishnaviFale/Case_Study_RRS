import React, { Component } from "react";
import AdminPortalStyle from '../Style/AdminPortalStyle.css'
import AuthService from '../services/AuthService ';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import travel from '../Images/travel.jpg'

export default class AdminPortal extends Component {
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
                    <h2 className="mymsg">Welcome To Railway Reservation System - Admin Portal</h2><br /><br />

                    <div className="MyDiv1">
                        <ul>
                            <li><Link to={"/"}>Home </Link></li>
                        </ul><br />
                        <ul>
                            <li><Link to={"/trainlist"}>Avaliable Trains </Link></li>
                        </ul><br />
                        <ul>
                            <li><Link to={"/addTrain"}>Create Train</Link></li>
                        </ul><br />
                        <ul>
                            <li><Link to={"/delTrain"}>Remove Train </Link></li>
                        </ul><br />
                        {/* <ul>
                            <li><Link to={"/reservationinfo"}>Registered Users </Link></li>
                        </ul> */}
                    </div>
                    <div className="MyDiv1">
                        <img className="MyImg" src={travel}></img>
                    </div>












                    {/*  <table>
                        <tr>
                            
                                <img src={travel}></img>
                            <br />
                            <th rowspan="5"></th>
                            <ul>
                                <li><Link to={"/"}>Avaliable Trains </Link></li>
                            </ul><br />
                            <ul>
                                <li><Link to={"/"}>Create Train</Link></li>
                            </ul><br />
                            <ul>
                                <li><Link to={"/"}>Remove Train </Link></li>
                            </ul><br />
                            <ul>
                                <li><Link to={"/"}>Registered Users </Link></li>
                            </ul><br />
                        </tr>

                        <tr>

                        </tr>
                    </table> */}

                </header>
            </div>
        );
    }
}