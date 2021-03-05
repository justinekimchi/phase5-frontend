// import logo from './logo.svg';
import React from 'react';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
// import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component{
   
   state ={
     users: [],
     currentUser: '',
     photos: []
   }

   logInUser = (username) => {
    let current = this.state.users.find(
        (user) => user.username === username
    );
    console.log(current)
    this.setState({ currentUser: current });
};

componentDidMount() {
  fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ users }));

  

  fetch("http://localhost:3000/photos")
      .then((resp) => resp.json())
      .then((photos) => this.setState({ photos }));
}

render() {
  return(
      <Router>
    
      <div className="app">
       <div className ="app-header">
         <img
           className="app-header-image"
           src="https://cdn.dribbble.com/users/43638/screenshots/713314/pre.png/"
           alt=""/>
      <NavBar user={this.state.currentUser} logInUser={this.logInUser}/>
      {/* <Route
                        exact
                        path="/albums"
                        render={(props) => ( */}
                            <MainContainer
                                // {...props}
                                
                            
                                
                                currentUser={this.state.currentUser}
                              
                                
                        //     />
                        // )}
                    />
    
       </div> 
       </div> 
       </Router>
  )
}
}
export default App