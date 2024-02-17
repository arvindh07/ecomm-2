import { useEffect } from "react";
import { API_DOMAIN, GET_ALL_PRODUCTS_URL } from "../API/endpoints";
import { useDispatch } from "react-redux";
import { productActions } from "../store/slices/productSlice";

const useGetProducts = () => {
    const dispatch = useDispatch();

    const getProducts = async () => {
        const url = API_DOMAIN + GET_ALL_PRODUCTS_URL;
        const res: any = await fetch(url);
        const json = await res.json();
        if(json?.status === "Ok"){
            dispatch(productActions.addProducts(json.products));
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
}

export default useGetProducts;