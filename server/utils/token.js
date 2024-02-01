import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const signJwtToken = (email, name) => {
    return jwt.sign({email, name}, process.env.JWT_SECRET);
}

export const verifyJwtToken = (req,res,next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    console.log(jwt.verify(token, process.env.JWT_SECRET));
    next();
}