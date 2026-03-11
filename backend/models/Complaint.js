import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({

  title: String,
  description: String,
  category: String,
  status: {
    type: String,
    default: "Pending"
  }

});

export default mongoose.model("Complaint", ComplaintSchema);