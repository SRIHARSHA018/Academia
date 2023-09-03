import React, { Component } from "react";
import { Button, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import axios from "axios"; // Import Axios

class CoursesView extends Component {
  state = {
    courses: [],
    isLoading: true, // Add a loading state
  };

  componentDidMount() {
    // Make an API call to retrieve the list of courses
    axios.get("/courses") // Replace with your actual API endpoint
      .then((response) => {
        this.setState({ courses: response.data, isLoading: false }); // Set isLoading to false when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        this.setState({ isLoading: false }); // Set isLoading to false on error as well
      });

  }
  enrollCourse(courseId){
    const token = localStorage.getItem("jwtToken");
    const user_id = localStorage.getItem("user_id");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.post('/courses/enroll',{user_id,course_id:courseId},config).then(res=>{
      console.log(res);
    }).catch(error=>console.log(error));
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Explore
        </Typography>
        {this.state.isLoading ? ( // Show loading animation when isLoading is true
          <CircularProgress />
        ) : (
          this.state.courses.map((course) => (
            <Card
              key={course._id}
              variant="outlined"
              sx={{ marginBottom: 2, width: "400px" }}
            >
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={()=>this.enrollCourse(course._id)}>
                  Enroll
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    );
  }
}

export default CoursesView;
