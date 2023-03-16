import express from "express";
import { login } from "../controllers/auth.js";
//Allow express to identify that these routes will be configured
const router = express.Router();

router.post("/login", login);

export default router;
