import express from "express";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/complaints",complaintRoutes);
app.use("/api/ai",aiRoutes);

app.listen(5000,()=>{
  console.log("Server running on port 5000");
});