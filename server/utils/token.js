import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const signJwtToken = (email, id) => {
    return jwt.sign({email, id}, process.env.JWT_SECRET);
}

export const verifyJwtToken = (req,res,next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    // const response = jwt.verify(token, process.env.JWT_SECRET);
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            console.log(err, success);
            if(err){
                reject();
                return res.status(401).json({
                    status: "Not Ok",
                    message: "Token Expired"
                })
            }else{
                console.log("TOken verification successful");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    })
    // I need this token in the next middleware which is checkAuthStatus
    // So I need to send this, for this, we are setting this res.locals
    next();
}