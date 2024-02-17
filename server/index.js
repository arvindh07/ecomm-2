import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import { connectToDb, disconnectToDb } from "./db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// default run middleware
app.use("/", (req, _, next) => {
    console.log("method:path:", req.method, req.path);
    next();
})

// routes
app.get("/", (_, res) => {
    return res.json({ "message": "Welcome to backend" });
})
app.use("/user", userRouter);

// listening for server

connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to db and server is running on ", PORT);
    })
}).catch(() => {
    disconnectToDb();
    console.log("Server connection failed");
})