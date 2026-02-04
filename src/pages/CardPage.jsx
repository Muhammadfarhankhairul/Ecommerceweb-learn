import { Frown, Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeCart, updateCart } from "../feature/cart/cartSlice";

export default function CardPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center ">
          <h2 className="mb-2 text-lg font-semibold inline-flex items-center gap-2 ">
            Sorry your cart is empty
            <Frown className="text-yellow-600" size={30} />
          </h2>
          <p className="mb-5">Add your product</p>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-gray-400 rounded-full hover:cursor-pointer hover:text-blue-600 ">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-2xl font-semibold mb-8">Shopping Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:grid-span-2 shadow-md p-4 rounded-md ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b">
                <Link to={`/product/${item.id}`}>
                  <img
                    className="w-25 h-25 object-cover rounded"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
                <div className="flex-1">
                  <Link className="font-semibold " to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                  <p>
                    {" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      className="bg-black rounded-full p-1 hover:cursor-pointer"
                      onClick={() =>
                        dispatch(
                          updateCart({
                            id: item.id,
                            quantity: Math.max(0, item.quantity - 1),
                          }),
                        )
                      }>
                      <Minus size={15} className="text-white" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-black rounded-full p-1 hover:cursor-pointer"
                      onClick={() =>
                        dispatch(
                          updateCart({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }>
                      <Plus size={15} className="text-white" />
                    </button>
                    <div
                      className="ml-4 text-red-500 hover:text-red-900 cursor-pointer"
                      onClick={() => dispatch(removeCart(item.id))}>
                      <Trash2 size={20} />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-semibold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:grid-span-1 ">
            <div className="shadow-md p-6 rounded-md bg-white">
              <h3 className="text-xl font-semibold mb-4">Order summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>
                    {" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(total)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex pt-2 font-bold border-t-2 justify-between">
                  <span>Total</span>
                  <span>
                    {" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(total)}
                  </span>
                </div>
              </div>
              <button className="bg-black text-white w-60 place-self-center flex justify-center px-5 py-2 hover:cursor-pointer hover:bg-gray-900">
                Proccess to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
