import Lawyer from "../models/Lawyer.js";
import { analyzeCase } from "../services/aiAnalyzer.js";

export const getRecommendedLawyers = async (req, res) => {

 try {

   const { category } = req.params;
   const aiResult = await analyzeCase(description);

   const lawyers = await Lawyer.find({
     specialization: category
   });

   res.json(lawyers);

 } catch (error) {
   res.status(500).json({ message: error.message });
 }

};