import Header from "../components/Header";
import ProductsHome from "./ProductsHome";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-14 py-10">
        <ProductsHome />
      </div>
    </div>
  )
}

export default Home