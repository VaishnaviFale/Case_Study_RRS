import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateTrain from "./CreateTrain";

class CancleReservation extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://localhost:8091/orders/findAllPass")
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    deleteRow(pnr, e) {
        axios.delete(`http://localhost:8091/orders/delete/${pnr}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = this.state.posts.filter(item => item.pnr !== pnr);
                this.setState({ posts });
            })

    }

    render() {
        return (
            <div>
                <h1> Cancle Reservation </h1><p></p>

                <table className="table table-bordered">
                    <thead>
                        <tr>

                            <th> Name </th>
                            <th> Gender </th>
                            <th> Age </th>
                            <th> Address </th>
                            
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.posts.map((post) => (
                            <tr>
                                <td> {post.name} </td>
                                <td> {post.sex} </td>
                                <td> {post.age} </td>
                                <td> {post.address} </td>
                                
                                <td>
                                    <button className="btn btn-danger" onClick={(e) =>
                                         {if(window.confirm('Are you sure ?'))this.deleteRow(post.pnr, e)}}>Cancle Reservation</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}
export default CancleReservation;
