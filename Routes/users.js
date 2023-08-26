const { getTest, userLogin, userSignUp, userDashboard } = require("../Controllers/users");
const verifyToken = require("../Middlewares/auth");

const router = require("express").Router();

router.route("/").get(getTest);
router.route("/login").post(userLogin);
router.route("/signup").post(userSignUp);
router.route("/welcome").get(verifyToken,userDashboard);

module.exports = router;
