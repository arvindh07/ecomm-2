import products from "../data/products.json" assert { type: "json" };

export const getAllProducts = (req, res) => {
    return res.status(200).json({
        status: "Ok",
        products: products
    })
}