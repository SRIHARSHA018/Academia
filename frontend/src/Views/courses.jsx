import React, { Component } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios"; // Import Axios

class CoursesView extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    // Make an API call to retrieve the list of courses
    axios.get("/courses") // Replace with your actual API endpoint
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Course List
        </Typography>
        {this.state.courses.map((course) => (
          <Card
            key={course.id}
            variant="outlined"
            sx={{ marginBottom: 2, width: "400px" }}
          >
            <CardContent>
              <Typography variant="h6">{course.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
              <Button variant="contained" color="primary">
                Enroll
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

export default CoursesView;
