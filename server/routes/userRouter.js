import express from "express";
import { checkAuthStatus, login, logout, signup } from "../controllers/userController.js";

const userRouter = express.Router();

// check auth status
userRouter.get("/auth-status", verifyToken, checkAuthStatus);

// login
userRouter.post("/login", login);

// sign up
userRouter.post("/signup", signup);

// logout
userRouter.post("/logout", logout);

export default userRouter;