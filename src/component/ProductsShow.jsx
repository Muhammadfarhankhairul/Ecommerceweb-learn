// import { products } from "../../product.js";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard.jsx";

export default function ProductsShow() {
  const products = useSelector((state) => state.product.filterItem);
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24 ">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
