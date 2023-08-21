import React from "react";

class LoginView extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Enter Email"></input>
        <input placeholder="Enter Password"></input>
        <button type="submit">Login</button>
      </div>
    );
  }
}

export default LoginView;
