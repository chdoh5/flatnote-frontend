import React from 'react'
import './Login.css'


class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            value: ''
        }
    }



    // handleChange = (e) => {
    //    console.log(e.target.value)
    // }



    render(){

        return(
        <div className="login">
            <h1>Login to Flatnote!</h1>
            <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleChange} id="username" type="text" name="username" placeholder="username" />
            {/* <input type="password" name="password" value="" placeholder="password" /> */}

            <input class="submit" type="submit" value="Login" />
            </form>
        </div>

        

        )
    }
  
}

export default Login;
