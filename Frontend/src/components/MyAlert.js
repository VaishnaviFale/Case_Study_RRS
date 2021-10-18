import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import MyAlertStyle from "../Style/MyAlertStyle.css"

function Alert() {
  return (
    <div >
     <div className="searchForm">
                    <div className="center">
                        <h1>You Need To <br/>Login First</h1>
                        <form  action="/login">
                            <div class="inputbox">
                                <input type="submit" value="Click Here To Login" />
                            </div>
                        </form>
                    </div>  </div>
     

     
    </div>
  )
}

export default Alert
