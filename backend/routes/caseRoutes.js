import { getRecommendedLawyers } from "../controllers/caseController.js";

router.get("/lawyers/:category", getRecommendedLawyers);
import { upload } from "../middleware/upload.js";

router.post("/upload-evidence", upload.single("file"), uploadEvidence);