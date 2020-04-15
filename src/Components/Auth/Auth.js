import React, { Component } from "react";
import {login, register} from "../../Redux/reducer"

class Auth extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password: ''
        }
    }
    handleLogin=()=>{
        this.props.login(this.state.username, this.state.password)
    }
    handleRegister=()=>{
        this.props.Register(this.state.username, this.state.password)
    }
  render() {
    return (
      <div>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button onClick='handleLogin'>Login</button>
        <button onClick='handleRegister'>Resgister</button>
      </div>
    );
  }
}
export default connect(null, { login, register })(Auth);