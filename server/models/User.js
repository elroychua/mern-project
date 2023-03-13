//sets up model
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    //have first name with these properties
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true, //not allowing for duplicate emails
    },
    //more config for password, kept simple first
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  {
    timestamps: true, //gives automatic dates when created
  }
);
//creating mongoose model
const User = mongoose.model("User", UserSchema);
export default User;
