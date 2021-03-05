import React from 'react'
import LoginForm from './LoginForm'
import UserWelcomePage from './UserWelcomePage'
// import {NavLink} from "react-router-dom"

const NavBar = (props) => {
    return(
        // <div className="navlinks">
        //     <NavLink to="/" exact>
        //         About
        //     </NavLink>


        //     <br />

    <div className="right">
        {props.user ? (
            <UserWelcomePage user={props.user} />
        ) :(
           <LoginForm logInUser={props.logInUser}/>
            
        )}
    </div>
    // </div>
    )
}

export default NavBar
