import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      require: true,
      min: 0,
    },
    gender: {
      type: String,
      enum: ["male", "female", "trans"],
      require: true,
    },
    address: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: Number,
    },
    complaints: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

//json web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        // firstname: this.firstname,
        // lastname: this.lastname,
        // age: this.age.toString(),
        // gender: this.gender,
        // address: this.address,
        email: this.email,
        // phone: this.phone.toString(),
        // complaints: this.complaints,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const User = new mongoose.model("User", userSchema);
