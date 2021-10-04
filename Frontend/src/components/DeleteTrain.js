import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateTrain from "./CreateTrain";

class DeleteTrain extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://localhost:8090/search/findAllTrains")
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    deleteRow(id, e) {
        axios.delete(`http://localhost:8090/trains/delete/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = this.state.posts.filter(item => item.id !== id);
                this.setState({ posts });
            })

    }

    render() {
        return (
            <div>
                <h1> Delete Train </h1><p></p>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> TrainID </th>
                            <th> Train Name </th>
                            <th> Source </th>
                            <th> Destination </th>
                            <th> Train Fare (In Rupees) </th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.posts.map((post) => (
                            <tr>
                                <td> {post.id} </td>
                                <td> {post.trainName} </td>
                                <td> {post.origin} </td>
                                <td> {post.destination} </td>
                                <td> {post.fare} </td>
                                <td>
                                    <button className="btn btn-danger" onClick={(e) =>
                                         {if(window.confirm('Delete the Train?'))this.deleteRow(post.id, e)}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}
export default DeleteTrain;
