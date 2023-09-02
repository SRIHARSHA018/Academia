const Course = require('./Models/courses');
const colors  = require('colors');
const connectDB = require("./DBUtils");
const mongoose = require('mongoose');
const dotenv = require("dotenv").config({ path: "./config.env" });

connectDB();

const coursesData = [
    {
      "title": "Introduction to Programming",
      "description": "A beginner's guide to programming concepts.",
      "instructor": "Instructor A",
      "duration": 4
    },
    {
      "title": "Web Development Fundamentals",
      "description": "Learn the basics of web development.",
      "instructor": "Instructor B",
      "duration": 6
    },
    {
      "title": "Machine Learning Essentials",
      "description": "Explore the fundamentals of machine learning.",
      "instructor": "Instructor C",
      "duration": 8
    }
  ]
  
const pushCourses = async () =>{
try{
    let response = await Course.create(coursesData);
    console.log(response);
}catch(err){
    console.error(err);
}
}

pushCourses().then(()=>{
    console.log("Successfully pushed the courses....".green);
}).catch(err=>{
    console.error(err);
}).finally(()=>mongoose.connection.close());