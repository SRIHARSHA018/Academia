const { getTest, userLogin, userSignUp } = require("../Controllers/users");

const router = require("express").Router();

router.route("/").get(getTest);
router.route("/login").post(userLogin);
router.route("/signup").post(userSignUp);

module.exports = router;
