const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
  token: {
    type: String,
  },
  bio: {
    type: String,
    trim: true,
  },
  profilePicture: {
    type: String, // Store the URL or path of the profile picture
  },
  resetToken: {
    type: String, // Store the password reset token
  },
  resetTokenExpiry: {
    type: Date, // Store the expiration date of the password reset token
  },
  enrolledCourse:{
    type:[String],
    default:[],
  }
});

module.exports = mongoose.model("User", UserSchema);
