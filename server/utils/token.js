import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const signJwtToken = (email) => {
    return jwt.sign(email, process.env.JWT_SECRET);
}

export const verifyJwtToken = (req,res,next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    console.log("cookies", req.cookies["auth_token"]);
    console.log("token", req.signedCookies, token);
    next();
}