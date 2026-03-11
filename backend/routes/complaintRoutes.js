import express from "express";
import Complaint from "../models/Complaint.js";

const router = express.Router();

router.post("/", async (req,res)=>{

  const complaint = new Complaint(req.body);

  await complaint.save();

  res.json(complaint);

});

router.get("/", async (req,res)=>{

  const complaints = await Complaint.find();

  res.json(complaints);

});

export default router;