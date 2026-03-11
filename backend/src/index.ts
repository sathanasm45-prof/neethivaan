import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

/*
Middleware
*/

app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/*
Test route
*/

app.get("/", (req, res) => {
  res.send("NEETHIVAAN API RUNNING");
});

/*
MongoDB connection
*/

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

/*
Port configuration
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 NEETHIVAAN server running on port ${PORT}`);
});