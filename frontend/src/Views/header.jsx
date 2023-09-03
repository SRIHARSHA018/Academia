import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography variant="h6">
            Academia
          </Typography>
        </Link>
        <div>
          <Link to="/users/login" style={{ color: "white", marginRight: "1rem" }}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/users/signup" style={{ color: "white" }}>
            <Button color="inherit">Sign Up</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
