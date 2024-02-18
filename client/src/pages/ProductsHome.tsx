import { useSelector } from "react-redux";
import Product from "../components/Product"
import useGetProducts from "../hooks/useGetProducts"
import { StoreState } from "../store/store";
import { useEffect, useState } from "react";

const ProductsHome = () => {
  useGetProducts();
  const [filteredProds, setFilteredProds] = useState<any>(null);
  const products = useSelector((store: StoreState) => store.products);
  if (!products) return null;

  useEffect(() => {
    switch (products?.filterCategory) {
      case "MEN":{
        setFilteredProds(products?.menProds);
        break;
      }
      case "WOMEN":{
        setFilteredProds(products?.womenProds);
        break;
      }
      default:{
        setFilteredProds(products?.products);
        break;
      }
    }
  }, [products, products?.filterCategory])

  return (
    <div className="col-span-8 grid grid-cols-4">
      {filteredProds?.map((prod: any) => {
        return (
          <Product key={prod?.id} product={prod} />
        )
      })}
    </div>
  )
}

export default ProductsHome