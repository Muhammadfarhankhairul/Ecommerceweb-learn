import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { addToCart } from "../feature/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id)),
  );

  if (!products) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container place-self-center px-4 py-8">
      <div>
        <Link
          to="/"
          className=" mb-8 flex gap-3 bg-black text-white w-20 rounded-xl items-center hover:text-blue-400 ">
          <ArrowLeft size={20} className="text-white hover:text-blue-500" />
          Back
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="shadow-lg p-4 rounded w-[400px] ">
            <img
              className="place-self-center"
              src={products.image}
              alt={products.title}
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">{products.title}</h1>
            <p className="mb-5">{products.description}</p>
            <div className="mb-4">
              <span className="text-2xl font-semibold">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(products.price)}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="mb-2 font-semibold">categori</h3>
              <span className="py-1 px-3 rounded-lg bg-gray-300 shadow-md  mb-2 text-sm">
                {products.category}
              </span>
            </div>
            <button
              onClick={() => dispatch(addToCart(products))}
              className="flex text-white bg-black w-full items-center justify-center md:w-auto px-6 py-3 rounded-full gap-2 hover:bg-gray-900 shadow-md hover:cursor-pointer ">
              <ShoppingCart className="text-white " />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
