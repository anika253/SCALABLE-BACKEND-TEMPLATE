import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
  try {
    let result = cloudinary.uploader.upload(filePath);
    console.log(result);

    return (await result).secure_url;
  } catch (e) {
    console.log(e);
  }
};
