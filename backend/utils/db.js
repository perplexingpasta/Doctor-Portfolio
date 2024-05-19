import mongoose from "mongoose";

// const URL = "mongodb://127.0.0.1:27017/father-website";
// const URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    // await mongoose.connect("URI");
    await mongoose.connect("mongodb+srv://mongodb:qwertyuiop@cluster0.zhkwiya.mongodb.net/father-website?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected successfully.");
  } catch (error) {
    console.log(error);
    console.error("Database connection failed.");
    process.exit(0);
  }
};
