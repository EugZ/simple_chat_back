import { Router } from "express";
import { registerUser, loginUser } from "./users.controller";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
