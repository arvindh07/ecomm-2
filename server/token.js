import jwt from "jsonwebtoken";

export const signJwtToken = (email) => {
    return jwt.sign(email, process.env.JWT_SECRET);
}