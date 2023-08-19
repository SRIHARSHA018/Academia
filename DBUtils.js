const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log("Connection failed, while connecting to database".red.italic);
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
