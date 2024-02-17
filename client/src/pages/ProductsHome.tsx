import { useSelector } from "react-redux";
import Product from "../components/Product"
import useGetProducts from "../hooks/useGetProducts"
import { StoreState } from "../store/store";

const ProductsHome = () => {
  useGetProducts();
  const products: any = useSelector((store: StoreState) => store.products);
  if(!products) return null;

  return (
    <div className="grid grid-cols-4">
      {products?.map((prod: any) => {
        return (
          <Product product={prod} />
        )
      })}
      {/* <Product />
      <Product />
      <Product />
      <Product />
      <Product />  */}
    </div>
  )
}

export default ProductsHome