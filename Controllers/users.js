const User = require("../Models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getTest = (req, res, next) => {
  res.status(200).send("Hey there!");
};

exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "Authentication failed." });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .send({ message: "Authentication failed, Incorrect password" });
    }

    // create a jwt token
    const token = jwt.sign(
      { userId: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(200).send({ message: "Authentication successful.", user: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred during login." });
  }
};

// for user registration.
exports.userSignUp = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email is already registered." });
    }
    // hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // create new user
    const newUser = await User.create({
      email,
      password: hashedPass,
      name,
    });
    await newUser.save();

    // create a jwt token for login session
    const token = jwt.sign(
      {
        userId: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    newUser.token = token;
    res
      .status(201)
      .send({ message: "Authentication successful.", user: newUser });
  } catch (err) {
    res.status(500).send({ message: "An error occurred during login." });
    console.log(err);
  }
};
