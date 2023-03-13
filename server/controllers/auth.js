//to encrypt
import bcrypt from "bcrypt";
//web token
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
//Async func, to make a call into a db.
//FE to BE, BE to DB.
//req is request body from FE, res is response back to FE
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    // using these in function.
    // creates random salt, to encrypt pw.
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    //this is where we create a new user.
    const newUser = new User({
      firstName,
      lastName,
      email,
      passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000), //for sake of simp
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    //send user status of 201 - something has been created.
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
