import bcrypt from "bcrypt";
import User from "../models/UserModel.js";
import { signJwtToken } from "../token.js";
import { COOKIE_NAME, COOKIE_OPTION } from "../constants.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            status: "No",
            message: "All fields are required | Invalid data format"
        })
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.status(400).json({
            status: "User exists",
            message: "User doesn't exist"
        })
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
        return res.status(400).json({
            status: "Invalid password",
            message: "Password do not match"
        })
    }
    res.clearCookie(COOKIE_NAME, COOKIE_OPTION);
    const token = signJwtToken(existingUser.email);
    res.cookie(COOKIE_NAME, token, COOKIE_OPTION);
    return res.status(200).json({
        status: "Ok",
        message: "Login successful"
    })
}

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            status: "No",
            message: "All fields are required | Invalid data format"
        })
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            status: "No",
            message: "User with this email already exists"
        })
    }
    const hash_password = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash_password });
    res.clearCookie(COOKIE_NAME, COOKIE_OPTION);
    const token = signJwtToken(existingUser.email);
    res.cookie(COOKIE_NAME, token, COOKIE_OPTION);
    return res.status(201).json({
        status: "Ok",
        message: "User created for " + newUser.name
    });
}

export const logout = () => {};