import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Divider,
} from "@mui/material";
import {Link} from 'react-router-dom';

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

class SignUpView extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    isRegistered: false,
    showError: false,
    errorMessage: "",
    isLoading: false,
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  async handleSignUp() {
    try {
      const { email, name, password, confirmPassword } = this.state;

      // Validate the email using the validator library
      if (!validator.isEmail(email)) {
        throw new Error("Invalid email address");
      }

      // Validate password and confirmPassword
      if (!validator.isLength(password, { min: 6 })) {
        throw new Error("Password must be at least 6 characters long");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Set loading state to true while making the signup request
      this.setState({ isLoading: true });

      // Make the signup request to your backend API
      // Replace '/users/signup' with your actual signup endpoint
      let signUpResponse = await axios.post("/users/signup", {
        email,
        name,
        password,
      });

      //console.log(signUpResponse);

      // Update the state to indicate successful registration
      this.setState({ isRegistered: true });
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
      // Set loading state back to false after signup request is complete
      this.setState({ isLoading: false });
    }
  }

  handleSubmit() {
    this.handleSignUp()
      .then()
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.state.isRegistered && (
          <Navigate to={"/users/login"} replace={true}></Navigate>
        )}
        <div style={styles.formContainer}>
          <Typography variant="h5" style={styles.title}>
            Sign Up
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
            name="name"
            label="Name"
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
          <TextField
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            variant="outlined"
            style={styles.inputField}
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            variant="contained"
            color="primary"
            style={styles.submitButton}
            onClick={() => this.handleSubmit()}
            disabled={this.state.isLoading}
          >
            {this.state.isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Register"
            )}
          </Button>
          <Divider style={styles.divider}/>
          <Button
            color="primary"
            variant="contained"
            style={styles.submitButton}
          >
            <Link style={{textDecoration:"none",color:"white"}} to="/users/login">Login</Link>
          </Button>
        </div>
      </Container>
    );
  }
}

export default SignUpView;
