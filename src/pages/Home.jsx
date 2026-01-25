import { useDispatch } from "react-redux";
import Footer from "../component/Footer";
import ProductsShow from "../component/ProductsShow";
import { setSelectCategory } from "../feature/product/productSlice";

export default function Home() {
  const category = ["All", "Smartphone", "Monitor"];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4">
          {category.map((cat) => {
            return (
              <button
                onClick={() => dispatch(setSelectCategory(cat))}
                key={cat}
                className="bg-blue-300 py-2 px-4 active:scale-102 transition-all ease-in hover:bg-blue-400 cursor-pointer">
                {cat}
              </button>
            );
          })}
        </div>
        <ProductsShow />
      </div>
      <Footer />
    </div>
  );
}
