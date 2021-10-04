import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AvaliableTrainTable from '../Style/AvaliableTrainTable.css'

class AvaliablePass extends Component {
    constructor(props) {
        super(props)

        this.state = {

            tickets: this.props.location.state.tickets
        }
    }
    deleteRow(pnr, e) {
        axios.delete(`http://localhost:8091/orders/delete/${pnr}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = this.state.tickets.filter(item => item.pnr !== pnr);
                this.setState({ posts });
            })

    }

    render() {
        return (
            <div>
                <div className="flightSearch"><br />
                    <h2>Passenger Details:</h2><br />
                    <table id="tbAvaliable">
                        <tr>
                            <td><b>Passenger Name</b></td>
                            <td><b>Gender</b></td>
                            <td><b>Age</b></td>
                            <td><b>Address</b></td>
                            <td><b>Start Station</b></td>
                            <td><b>End Station</b></td>
                            {/* <td>Action</td> */}
                        </tr>

                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                        <tr key={ticket.id}>
                                            <td>{ticket.name}</td>
                                            <td>{ticket.sex}</td>
                                            <td>{ticket.age}</td>
                                            <td>{ticket.address}</td>
                                            <td>{ticket.origin}</td>
                                            <td>{ticket.destination}</td>
                                            {/* <td>
                                                <button className="btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure ?')) this.deleteRow(ticket.pnr, e) }}>Cancle Reservation</button>
                                            </td>  */}

                                        </tr>
                                )
                            }
                        </tbody>
                        <tr>
                            <td><b>Credit Card No.</b></td>
                            <td><b>Bank</b></td>
                            <td><b>Class Name</b></td>
                            <td><b>Number of Passenger</b></td>
                            <td><b>Date</b></td>
                            <td><b>PNR</b></td>
                            {/* <td>Action</td> */}
                        </tr>
                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                        <tr key={ticket.id}>
                                            <td>{ticket.creditno}</td>
                                            <td>{ticket.bank}</td>
                                            <td>{ticket.className}</td>
                                            <td>{ticket.quantity}</td>
                                            <td>{ticket.date}</td>
                                            <td>{ticket.pnr}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table><br />
                    <Link to="/delTicket" >
                        <button className="btn btn-danger">
                            <h3>Cancle Reservation</h3>
                        </button><br />
                    </Link>
                </div>
            </div>
        )
    }
}
export default AvaliablePass;
