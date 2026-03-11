import express from "express";

const router = express.Router();

router.post("/chat",(req,res)=>{

const question = req.body.question;

let reply = "Please consult a lawyer.";

if(question.includes("cyber"))
reply = "Cyber crime complaints can be filed in the cyber cell.";

if(question.includes("divorce"))
reply = "Family court handles divorce cases.";

res.json({answer:reply});

});

export default router;