import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class LoginView extends React.Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
  };
  handleChange(e) {
    let elname = e.target.name;
    let target = e.target;
    let value = target.value;
    this.setState({
      [elname]: value,
    });
    //console.log(this.state);
  }
  validateCredentials() {}
  async handleLogin() {
    try {
      let loggedInDetails = await axios.post("/users/login", this.state);
      console.log(loggedInDetails);
      this.setState({ isLoggedIn: true });
      localStorage.setItem("jwtToken", loggedInDetails.data.user.token || "");
    } catch (error) {
      console.log(error);
    }
  }
  handleSubmit() {
    //console.log(this.state);
    //console.log("Testing the backend integration....");
    // trying to test login....
    this.validateCredentials();
    this.handleLogin()
      .then()
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.isLoggedIn && (
          <Navigate to={"/welcome"} replace={true}></Navigate>
        )}
        <input
          name="email"
          placeholder="Enter Email"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button type="submit" onClick={() => this.handleSubmit()}>
          Login
        </button>
      </div>
    );
  }
}

export default LoginView;
