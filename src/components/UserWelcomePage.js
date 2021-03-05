import React from 'react';
import {NavLink} from 'react-router-dom'


const UserWelcomePage = (props) => {
    return (
        <div>
         <h3>{`Welcome, ${props.user.username}!`}</h3>
            <NavLink
                to="/albums"
                exact
                >My Albums</NavLink> <br/>
            <NavLink
                to="/photos"
                exact
                >My Photos</NavLink><br/>
        </div>
    )
}

export default UserWelcomePage;