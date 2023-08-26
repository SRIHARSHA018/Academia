const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const config = process.env;
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract the token part from "Bearer <token>"
  if (!token) {
    return res.status(403).send("Access denied. Token missing.");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "Access denied. Invalid token." });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Access denied. Invalid token." });
  }
};

module.exports = verifyToken;
