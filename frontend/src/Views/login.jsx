import React from "react";
import axios from "axios";

class LoginView extends React.Component {
  state={
    email:"",
    password:""
  }
  handleChange(e){
    let elname = e.target.name;
    let target = e.target;
    let value  = target.value;
    this.setState({
      [elname] :value
    });
    console.log(this.state);
  }
  validateCredentials(){
    
  }
  handleSubmit(){
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <input name="email" placeholder="Enter Email" onChange={(e)=>this.handleChange(e)}></input>
        <input name="password" type="password"  placeholder="Enter Password" onChange={(e)=>this.handleChange(e)}></input>
        <button type="submit" onClick={()=>this.handleSubmit()}>Login</button>
      </div>
    );
  }
}

export default LoginView;
