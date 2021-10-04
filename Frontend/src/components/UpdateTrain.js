import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateTrain from "./CreateTrain";

class UpdateTrain extends React.Component {
    state = {
        posts: []
    }

    initialState={
        id:'',trainName:'',origin:'',destination:'',fare:''
 
    };

    componentDidMount() {
        const id=+this.props.match.params.id;
        if(id){
            this.findTrainById(id);
        }
    }

    findTrainById=(id)=>{
        axios.get("http://localhost:8090/search/findAllTrains/"+id)
        .then(response => {
            if(response.data != null){
                this.setState({
                    id:response.data.id,
                    trainName:response.data.trainName,
                    origin:response.data.origin,
                    destination:response.data.destination,
                    fare:response.data.fare

                });
            }
        }).catch((error) => {
            console.error("Error -"+error);
        });
    }

     componentDidMount() {
        axios.get("http://localhost:8090/search/findAllTrains")
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    } 


    UpdateTrain(id, e) {
        axios.delete(`http://localhost:8090/trains/update/${id}`)
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
                <h1> Update Train </h1><p></p>

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
                                    <Link to={"edit/"+post.id}>
                                        <button className="btn btn-success"  type="button">
                                            Update
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}
export default UpdateTrain;
