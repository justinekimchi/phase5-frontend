import React from 'react'

class LoginForm extends React.Component {

    state={
        input: ""
    }

    handleChange= (e) =>{
        this.setState({input: e.target.value})
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.logInUser(this.state.input)
        e.target.reset()
    }
    render(){
    return (
        <form onSubmit={(e)=> this.handleSubmit(e)}>
            <div className= "form-inner">
                <h2>PikFlix</h2>
                <div className= "form-group">
                    <label htmlFor= "username">Username:</label>
                    <input type= "text"  name="username" id="username" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"  />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"  />
                </div>
              
                <input type="submit" value= "LOG IN"/>
            </div>
        </form>
    )
}
}
export default LoginForm
