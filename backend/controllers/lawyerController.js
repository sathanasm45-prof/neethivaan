import Lawyer from "../models/Lawyer.js";

export const getRecommendedLawyers = async(req,res)=>{

const {category} = req.params;

const lawyers = await Lawyer.find({
specialization:category
});

res.json(lawyers);

};