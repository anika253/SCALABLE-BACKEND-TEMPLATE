import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let mongo_uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};
export default connectDB;
