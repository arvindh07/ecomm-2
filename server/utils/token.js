import jwt from "jsonwebtoken";

export const signJwtToken = (email) => {
    return jwt.sign(email, process.env.JWT_SECRET);
}

export const verifyJwtToken = () => {
    const token = req.signedCookies['auth_token'];
    console.log(token);
}