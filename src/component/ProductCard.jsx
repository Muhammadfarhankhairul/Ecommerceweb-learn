import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer  ">
        <img src={product.image} className="w-50   place-self-center" />
        <div className="bg-gray-50 p-4">
          <h2 className=" text-lg font-semibold my-2">
            {product.title.substring(0, 25) + "..."}
          </h2>
          <p className="text-sm pb-4">
            {product.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(product.price)}
            </p>
            <p className="bg-black text-white p-2 m-3 rounded-full">
              View details
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
