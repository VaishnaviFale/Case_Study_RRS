import React, { Component } from 'react'
import axios from 'axios'
import history from "react-router";
import SearchingStyle from '../Style/SearchingStyle.css'

class SearchByPnr extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pnr: "",

            tickets: []
        }
    }

    changeHandler1 = (e) => {
        this.setState({
            pnr: e.target.value,
        });
    }



    submitHandler = (e) => {
        e.preventDefault()
        console.log("Vaishnavi")
        axios.get("http://localhost:8091/orders/" + this.state.pnr)
            .then(response => {
                console.log(response.data)
                this.setState({
                    tickets: response.data
                });
                this.props.history.push({
                    pathname: `/passDetail`,
                    state: { tickets: response.data }
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div><br/><marquee><h3>PAKISTAN RAILWAYS PASSENGER RESERVATION ENQUIRY</h3></marquee>
                <div className="searchForm">
                    <div className="center">
                        <h1>Enter PNR No.</h1>
                        <form onSubmit={this.submitHandler} action="/">
                            <div class="inputbox">
                                <input type="text" name="pnr" value={this.state.pnr} onChange={this.changeHandler1} required="required" />
                                <span>PNR </span>
                            </div>
                            <div class="inputbox">
                                <input type="submit" value="Search" />
                            </div>
                        </form>
                    </div>  </div>

            </div>
        )
    }
}

export default SearchByPnr

