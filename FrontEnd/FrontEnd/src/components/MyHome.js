import React from 'react'
import home from '../Images/home.jpg'
import HomeStyle from '../Style/HomeStyle.css'


function MyHome() {
    return (
        <div className="home">
                <img className="home_image"
                src={home}></img>
                <div className="home_msg">Welcome To <br></br> Online Railway <br></br> Reservation System.</div>
        </div>
    )
}

export default MyHome
