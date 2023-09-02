const Course = require('../Models/courses');


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