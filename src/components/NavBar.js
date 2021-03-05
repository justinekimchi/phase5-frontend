import React from 'react'

function NavBar() {
    return (
    
        <div className = "welcome">
      <h2>Welcome, <span>{user.username}</span></h2>
       <button onClick={Logout}>Log Out</button>
     </div>
       
    )
}

export default NavBar
