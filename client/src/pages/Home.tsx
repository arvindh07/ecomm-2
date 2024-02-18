import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductsHome from "./ProductsHome";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-10 grid grid-flow-col">
        {/* categories */}
        <Categories />
        <ProductsHome />
      </div>
    </div>
  )
}

export default Home