import express from "express";
import { login, logout, signup } from "../controllers/userController.js";

const userRouter = express.Router();

// login
userRouter.post("/login", login);

// sign up
userRouter.post("/signup", signup);

// logout
userRouter.post("/logout", logout);

export default userRouter;