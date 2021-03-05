// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
   
    const [users, setUsers]=useState([])
    const [user, setUser] = useState({username:"", email: "", password: ""});
    const [error, setError]= useState("")

    useEffect(() => {
      fetch('http://localhost:3000/users')
      .then(res=>res.json())
      .then(data=>setUsers(data))
    }, [])


    const Login = (details) => {
       let current = users.find((user) => user.username === details.username && user.password == details.password && user.email === details.email)
       
     if (current) {
      setUser({
        username: current.username,
        email: current.email
      })}
       else {
      setError("Details do not match! Please try again.")
    }

  }

    const Logout= () => {
      setUser({username:"", email: "", password: ""})
    }

  return (
    <Router>
    
    <div className="App">
   {(user.email !== "") ? (
     <div className = "welcome">
       <h2>Welcome, <span>{user.username}</span></h2>
       <button onClick={Logout}>Log Out</button>
     </div>
   ) : (
     <LoginForm Login={Login} error={error}/>
   ) }
    </div>
    
    </Router>
  );
}

export default App;
