import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema({

name:String,

specialization:String,

rating:Number,

experience:Number,

sector:String,

reviews:[String]

});

export default mongoose.model("Lawyer", lawyerSchema);