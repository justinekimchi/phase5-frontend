import React from 'react'
import Album from '../components/Album'

class AlbumsContainer extends React.Component{
    



render(){
    return (
        <div className ="albums-container">
         {this.props.albums.map(album => (
             <Album 
                album={album}
                key={album.id}
                currentUser={this.props.currentUser}
                />
         ))}
            
        </div>
    )
         }
        }
export default AlbumsContainer
