import React from 'react'
import AlbumForm from '../components/AlbumForm'
import AlbumsContainer from './AlbumsContainer'
import PhotosContainer from './PhotosContainer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class MainContainer extends React.Component{
    state={
        albums: []
    }

componentDidMount(){
    fetch("http://localhost:3000/albums")
      .then((resp) => resp.json())
      .then((albums) => this.setState({ albums }))
};
    
    
    render() {
        return(
            
            <Router>
                <Switch>
            <fragment>
            <AlbumForm/>
            <AlbumsContainer albums={this.state.albums} currentUser={this.props.currentUser}/>
            <PhotosContainer/>
            </fragment>
            </Switch>
            </Router>
        )
    }
}

export default MainContainer