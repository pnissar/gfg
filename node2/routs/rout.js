import express from "express";
import grab from "../controler/cont1.js";
const router = express.Router();
router.post("/u/:idd", grab);
export default router;
