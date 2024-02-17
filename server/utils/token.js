import jwt from "jsonwebtoken";
import { COOKIE_NAME, COOKIE_OPTION } from "./constants.js";

export const signJwtToken = (email, id) => {
    return jwt.sign({email, id}, process.env.JWT_SECRET, {
        expiresIn: "2d"
    });
}

export const verifyJwtToken = (req,res,next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    // const response = jwt.verify(token, process.env.JWT_SECRET);
    try {
        return new Promise((resolve, reject) => {
            return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
                if(err){
                    // reject();
                    res.clearCookie(COOKIE_NAME, COOKIE_OPTION);
                    return res.status(401).json({
                        status: "Not Ok",
                        message: "Token Expired"
                    })
                }else{
                    resolve();
                    res.locals.jwtData = success;
                    return next();
                }
            });
        })
    } catch (error) {
        console.log(error, "token err");
    }
    // I need this token in the next middleware which is checkAuthStatus
    // So I need to send this, for this, we are setting this res.locals
}