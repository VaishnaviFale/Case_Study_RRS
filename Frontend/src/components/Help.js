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
                    <h2 className="mymsg">About Train Travel in Pakistan . . .</h2><br /><br />

                    <div className="MyDiv1">
                        <h4> Pakistan Railways (reporting mark PR) (Urdu: پاکستان ریلویز‎) is the national,
                            state-owned railway company of Pakistan.Founded in 1861 and headquartered in Lahore,
                            it owns 7,791 kilometres (4,841 miles) of track across Pakistan, stretching from Torkham to Karachi,
                            offering both freight and passenger services.
                            <a href="https://en.wikipedia.org/wiki/Pakistan_Railways" style={{ color: '#0000FF' }}> Read More here..</a>
                        </h4><br />
                        <h4><b>Train operator: </b></h4>
                        <h4>  Pakistan Railway Corporation -
                            <a href="https://www.seat61.com/Pakistan.htm#Hotels%20in%20Pakistan" style={{ color: '#0000FF' }}>www.pakrail.gov.pk</a><br />
                            Time zone & dial code: GMT + 5.  Dial code +92.
                            Hotels:
                            <a href="https://www.seat61.com/Pakistan.htm#Hotels%20in%20Pakistan" style={{ color: '#0000FF' }}> Hotel Search</a><br />
                            Tourist information:
                            <a href="https://www.tripadvisor.com/Tourism-g293959-Pakistan-Vacations.html" style={{ color: '#0000FF' }}> Health & vaccinations</a><br />
                            <br />
                        </h4>
                        <div className="MyDiv3">
                            <ul>
                                <li><Link to={"/trainlist"} >
                                    Avaliable Trains
                                </Link>
                                </li>
                                <li><Link to={"/search"} >
                                    Search Trains
                                </Link>
                                </li>
                            </ul>

                            <br />
                            <ul>
                                <li><Link to={"/reservation"} >
                                    Book Your Ticket
                                </Link>
                                </li>
                                <li><Link to={"/searchByPnr"}  >
                                    PNR Enquiry
                                </Link>
                                </li>
                            </ul>

                            <br />
                        </div>

                    </div>
                </header>
            </div>
        );
    }
}