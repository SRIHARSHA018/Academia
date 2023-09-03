const { getAllCourses, enrollCourse } = require("../Controllers/courses");
const verifyToken = require("../Middlewares/auth");

const router = require("express").Router();


router.route("/").get(getAllCourses);
router.route("/enroll").post(verifyToken,enrollCourse);


module.exports =  router;