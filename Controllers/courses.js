const Course = require('../Models/courses');
const User = require("../Models/users");


exports.getAllCourses = async (req,res,next)=>{
    try {
        // Fetch all courses from the database
        const courses = await Course.find();
    
        // Return the courses as a JSON response
        res.status(200).json(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: "Internal server error" });
      }
} 

exports.enrollCourse = async (req,res,next)=>{
  try{
    const {user_id, course_id} = req.body;

    // Check if the user exists
    const user = await User.findById(user_id);
    if(!user){
      return res.status(401).send("User not found, please sign up");
    }

    // Check if the course exists
    const course = await Course.findById(course_id);
    if (!course) {
      return res.status(404).send("Course not found");
    }

    // Check if the user is already enrolled in the course
    if (user.enrolledCourses.includes(course_id)) {
      return res.status(400).send("User is already enrolled in this course");
    }

    // Add the course ID to the user's enrolledCourses array
    user.enrolledCourses.push(course_id);
    await user.save();

    // Optionally, you can also add the user ID to the course's enrolledUsers array
    course.enrolledUsers.push(user_id);
    await course.save();

    res.status(200).send("Enrollment successful");

  }catch(error){
    console.error(error);
    res.status(500).send("An error occurred during enrollment");
  }
}