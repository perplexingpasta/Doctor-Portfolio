import express from "express";
import { home, contact } from "../controllers/auth-controller.js";
const router = express.Router();

router.route("/").get(home);
router.route("/contact").post(contact);

export default router;
