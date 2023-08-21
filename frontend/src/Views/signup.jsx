import React from "react";

class SignUpView extends React.Component {
  render() {
    return (
      <div>
        <input type="email" placeholder="Enter Email"></input>
        <input type="text" placeholder="Enter Name"></input>
        <input type="text" placeholder="Enter Password"></input>
        <input type="text" placeholder="confirm password"></input>
        <button type="submit">Register</button>
      </div>
    );
  }
}

export default SignUpView;
