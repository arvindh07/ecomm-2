import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("Connection to DB failed", error);
    }
}

export const disconnectToDb = async () => {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log("Disconnection to DB failed");
    }
}