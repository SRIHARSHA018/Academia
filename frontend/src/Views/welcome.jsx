import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import CoursesView from "./courses";

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
      try {
        let response = await axios.get("/users/welcome", config);
        if (response.status === 200) {
          this.setState({ isAuthorized: true });
        }
        localStorage.setItem('user_id',response.data.user._id);
      } catch (err) {
        console.error(err);
      }
    };
    handleAuth();
  }
  render() {
    return (
      <div>
        <div className="header__container">
        {this.state.isAuthorized ? "Welcome" :"Threat" }
        {this.state.isAuthorized && <Link to="/users/login"
          onClick={() => {
            localStorage.removeItem("jwtToken");
            localStorage.removeItem('user_id');
            this.setState({ isAuthorized: false });
          }}
        >
          <Button variant="outlined">Log out</Button>        
        </Link>}
        </div>
        <div>
          <CoursesView/>
        </div>
      </div>
    );
  }
}

export default WelcomeView;
