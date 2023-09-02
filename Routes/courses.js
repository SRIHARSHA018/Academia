const { getAllCourses } = require("../Controllers/courses");

const router = require("express").Router();


router.route("/").get(getAllCourses);


module.exports =  router;