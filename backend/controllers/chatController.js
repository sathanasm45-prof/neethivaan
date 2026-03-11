import { legalChat } from "../services/chatbot.js";

export const chatWithAI = async (req,res)=>{

const {question} = req.body;

const reply = await legalChat(question);

res.json({reply});

};