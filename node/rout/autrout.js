import { grabData } from "../controler/aut.js";
import express from "express"
import { login } from "../controler/login.js";
const router = express.Router();
router.get("/login", login);
export default router;