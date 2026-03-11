import { Router } from "express";
import { analyzeCase } from "../controllers/aiController";
import { protect } from "../middleware/authMiddleware";
import { adminOnly } from "../middleware/roleMiddleware";

const router = Router();

router.post("/analyze/:complaintId", protect, adminOnly, analyzeCase);

export default router;