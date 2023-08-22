import React from "react";
import axios from "axios";

class LoginView extends React.Component {
  state={
    email:"",
    password:"",
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
  fetchTestingLogin = async ()=>{
    try{
      let loggedInDetails = await axios.post("/users/login",this.state);
      return loggedInDetails;
    }
    catch(error){
      console.log(error);
    }
  }
  handleSubmit(){
    console.log(this.state);
    console.log("Testing the backend integration....");
    // trying to test login.....
    axios.defaults.baseURL = "https://cuddly-system-6r7955qwj5724r7q-8002.app.github.dev/api";
    this.fetchTestingLogin().then(res=>console.log(res));
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
