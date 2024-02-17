import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: number
    },
    category: ["Men" | "Women"]
}, {timestamps: true})

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;