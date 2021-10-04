import React from 'react'
import DeleteTrain from './DeleteTrain'
import CreateTrain from './CreateTrain'
import TrainList from './TrainList'
import AdminHeadStyle from '../Style/AdminHeadStyle.css'
import { Link, NavLink } from 'react-router-dom';

function AdminHead() {
    return (
        <div className="adminHead">
            <div className="function">
                <div className="box box1"> <NavLink  to="/addTrain">ADD TRAIN </NavLink></div>
                <div className="box box2"> <NavLink  to="/delTrain">REMOVE TRAIN </NavLink></div>
                {/* <div className="box box2"> <NavLink  to="/updateTrain">UPDATE TRAIN </NavLink></div> */}
            </div>
        </div>
    )
}

export default AdminHead
