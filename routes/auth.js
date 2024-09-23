import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

// Route to register a new user
router.post("/register", register);

// Route to log in an existing user
router.post("/login", login);

// Route to log out the user
router.post("/logout", logout);

export default router;
