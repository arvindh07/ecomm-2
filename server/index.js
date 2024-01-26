import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import { connectToDb, disconnectToDb } from "./db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());

// default run
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