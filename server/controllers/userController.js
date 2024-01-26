import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import { signJwtToken } from "../token.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required | Invalid data format"
        })
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.status(400).json({
            message: "User doesn't exist. Please create a new one"
        })
    }
    const passwordMatch = bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
        return res.status(400).json({
            message: "Password do not match"
        })
    }
    const signedToken = signJwtToken(existingUser.email);
    return res.status(200).json({
        message: "Login successful",
        token: signedToken
    })
}

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required | Invalid data format"
        })
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            message: "User with this email already exists"
        })
    }
    const hash_password = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash_password });
    const signedToken = signJwtToken(email);
    return res.status(201).json({
        message: "User created for " + newUser.name,
        token: signedToken
    });
}

export const logout = () => {};