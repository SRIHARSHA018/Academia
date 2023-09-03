import React from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Divider, // Import Divider for the line
} from "@mui/material";

import validator from "validator";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  },
  inputField: {
    width: "100%",
    marginBottom: "1rem",
  },
  submitButton: {
    width: "100%",
    marginTop: "1rem",
    borderRadius: "25px",
  },
  title: {
    marginBottom: "1rem",
  },
  error: {
    width: "100%",
    marginBottom: "1rem",
  },
  divider: {
    width: "100%",
    margin: "1rem 0", // Add margin for spacing
  },
};

class LoginView extends React.Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
    showError: false,
    errorMessage: "",
    isLoading: false, // Add loading state
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  async handleLogin() {
    try {
      const { email, password } = this.state;

// Validate the email using the validator library
      if (!validator.isEmail(email)) {
        throw new Error("Invalid email address");
      }
// Validate the password (e.g., minimum length)
      if (!validator.isLength(password, { min: 6 })) {
        throw new Error("Password must be at least 6 characters long");
      }

// Set loading state to true while making the login request
      this.setState({ isLoading: true });

      let loggedInDetails = await axios.post("/users/login", this.state);
//console.log(loggedInDetails);
      this.setState({ isLoggedIn: true });
      localStorage.setItem("jwtToken", loggedInDetails.data.user.token || "");
    } catch (error) {
//console.log(error);
      let errorMessage = error.response
        ? error.response.data.message
        : error.message;
      this.setState({
        showError: true,
        errorMessage,
      });
    } finally {
// Set loading state back to false after login request is complete
      this.setState({ isLoading: false });
    }
  }

  handleSubmit() {
    this.handleLogin()
      .then()
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.state.isLoggedIn && (
          <Navigate to={"/welcome"} replace={true}></Navigate>
        )}
        <div style={styles.formContainer}>
          <Typography variant="h5" style={styles.title}>
            Login
          </Typography>
          {this.state.showError && (
            <Alert severity="error" style={styles.error}>
              {this.state.errorMessage}
            </Alert>
          )}
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            style={styles.inputField}
            onChange={(e) => this.handleChange(e)}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            style={styles.inputField}
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            variant="contained"
            color="primary"
            style={styles.submitButton}
            onClick={() => this.handleSubmit()}
            disabled={this.state.isLoading} // Disable the button while loading
          >
            {this.state.isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )}
          </Button>
          <Divider style={styles.divider} /> {/* Divider line */}
          <Button
            color="primary"
            variant="contained"
            style={styles.submitButton}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/users/signup"
            >
              SignUp
            </Link>
          </Button>
        </div>
      </Container>
    );
  }
}

export default LoginView;