import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


class WelcomeView extends React.Component {
  state = {
    isAuthorized: false,
  };
  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const handleAuth = async () => {
      axios.defaults.baseURL =
        "https://cuddly-system-6r7955qwj5724r7q-8002.app.github.dev/api";
      try {
        let response = await axios.get("/users/welcome", config);
        if (response.status === 200) {
          this.setState({ isAuthorized: true });
        }
      } catch (err) {
        console.error(err);
      }
    };
    handleAuth();
  }
  render() {
    return (
      <div>
        {this.state.isAuthorized ? "Welcome" :"Threat" }
        {this.state.isAuthorized && <Link to="/users/login"
          onClick={() => {
            localStorage.removeItem("jwtToken");
            this.setState({ isAuthorized: false });
          }}
        >
          Log out
        </Link>}
      </div>
    );
  }
}

export default WelcomeView;
