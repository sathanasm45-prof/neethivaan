import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req,res)=>{

  const {name,email,password} = req.body;

  const hashed = await bcrypt.hash(password,10);

  const user = new User({
    name,
    email,
    password:hashed
  });

  await user.save();

  res.json({message:"User Registered"});
});

router.post("/login", async (req,res)=>{

  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user)
    return res.json({message:"User not found"});

  const match = await bcrypt.compare(password,user.password);

  if(!match)
    return res.json({message:"Wrong password"});

  res.json({message:"Login success"});
});

export default router;