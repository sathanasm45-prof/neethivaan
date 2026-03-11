import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({

title:String,

description:String,

category:String,

riskLevel:String,

aiSummary:String,

predictedOutcome:String,

status:{
type:String,
default:"Submitted"
},

evidenceFiles:[String],

statusHistory:[
{
status:String,
date:Date
}
]

});

export default mongoose.model("Case", caseSchema);
const CaseSchema = new mongoose.Schema({

description: String,

aiAnalysis: String

});