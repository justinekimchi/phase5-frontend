import React from 'react'

class Album extends React.Component {
    // state = {
    //     modal: false,
    // };


    render(){
      return (
        <div>
            <img
              className="album-cover"
              src={this.props.album.img}
              alt={this.props.album.title}
                        // onClick={() => this.setState({ modal: true })}
                    ></img>
        </div>
    )
}
}

export default Album
