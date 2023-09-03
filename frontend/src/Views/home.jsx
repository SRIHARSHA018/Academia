import React from "react";
import { Grid, Typography } from "@mui/material";
import CoursesView from "./courses";

const styles = {
  container: {
    minHeight: "100vh",
    padding: "2rem",
  },
  content: {
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    borderRadius: "25px",
  },
};

class HomeView extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        {/* Content */}
        <Grid container direction="column" alignItems="center" style={styles.content}>
          <Typography variant="h4" gutterBottom style={styles.heading}>
            Academia
          </Typography>
          <Typography variant="subtitle1" gutterBottom style={styles.subtitle}>
            Reshaping Young Talents
          </Typography>
          <CoursesView/>
        </Grid>
      </div>
    );
  }
}

export default HomeView;
