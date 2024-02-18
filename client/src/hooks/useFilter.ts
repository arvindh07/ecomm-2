import { useSelector } from "react-redux";
import { StoreState } from "../store/store";

const useFilter = () => {
    const prods: any = useSelector((store: StoreState) => store.products);
    if(!prods) return;
    const menProds = prods.filter((prod: any) => prod.category === "Men");
    const womenProds = prods.filter((prod: any) => prod.category === "Men");
    return {menProds, womenProds};
}

export default useFilter;