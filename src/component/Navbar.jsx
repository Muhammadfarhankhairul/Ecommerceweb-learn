import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/image/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../feature/product/productSlice";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const serachItems = useSelector((state) => state.product.serachItem);
  const cartItem = useSelector((state) => state.cart.items);
  const itemCount = cartItem.reduce((total, item) => total + item.quantity, 0);
  function handleUserMenu() {
    setOpen(!isOpen);
  }
  return (
    <div className="bg-white shadow-md  ">
      <div className="py-5 shadow-md  ">
        <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 relative">
          <div className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </div>
          <div
            className={`${isOpen ? "flex absolute flex-col right-0 md:right-0 top-12 z-10 bg-gray-100 p-4 gap-3" : "hidden"}`}>
            <li>
              <Link to="">Sign</Link>
            </li>
            <li>
              <Link to="">My Account</Link>
            </li>
          </div>
          <User
            size={30}
            className="rounded-full cursor-pointer bg-gray-200 "
            onClick={handleUserMenu}
          />
        </ul>
      </div>
      <nav className="flex justify-between items-center container mx-auto md:py-6 px-2 ">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} className="w-30 rounded-xl" />
          </Link>
        </div>
        <form className="w-1/2 sm:block hidden">
          <input
            value={serachItems}
            onChange={(e) => dispatch(setSearchItem(e.target.value))}
            type="text"
            placeholder="Search Product"
            className="rounded-md border border-gray-600 bg-gray-50 focus:outline-none py-3 px-3 w-full"
          />
        </form>
        <div className="relative">
          <Link to="/card">
            <ShoppingCart size={20} className="cursor-pointer text-blue-700" />
            {itemCount > 0 && (
              <span className="absolute -top-2 left-5 bg-blue-700 text-white rounded-full w-5 h-5 items-center justify-center flex">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}
