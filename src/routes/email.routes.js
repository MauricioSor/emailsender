import { Router } from "express";
import { email } from "../controllers/email.controllers";

const router=Router();

router.route("/").post(email);

export default router