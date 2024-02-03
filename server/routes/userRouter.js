import express from "express";
import { checkAuthStatus, login, logout, signup } from "../controllers/userController.js";
import { verifyJwtToken } from "../utils/token.js";

const userRouter = express.Router();

// check auth status
userRouter.get("/auth-status", verifyJwtToken, checkAuthStatus);

// login
userRouter.post("/login", login);

// sign up
userRouter.post("/signup", signup);

// logout
userRouter.get("/logout", logout);

export default userRouter;