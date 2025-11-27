import Image from "next/image";
import Link from "next/link";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

export default async function AllProducts() {
  const res = await fetch("https://khalids-dreams-server.vercel.app/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="my-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#03373D]">
        ALL Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 relative"
          >
            {/* Product Image & Status Badge */}
            <div className="relative">
              <Image
                src={item.productUrl || "/placeholder.png"}
                alt={item.productTitle || "Product Image"}
                width={400}
                height={300}
                className="rounded-lg w-full h-56 object-cover"
              />

              {/* Status */}
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {item.status}
              </span>
            </div>

            {/* Product Title */}
            <h2 className="text-xl font-bold mt-4 text-[#03373D]">
              {item.productTitle}
            </h2>

            {/* Price & Discount */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-lg font-bold text-green-700">৳ {item.price}</p>

              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <span className="font-semibold">-{item.discountPrice}</span>
                <RiDiscountPercentLine size={18} />
              </p>
            </div>

            {/* Rating */}
            <p className="flex items-center gap-1 text-orange-400 mt-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <span className="text-gray-600 font-medium text-sm">
                ({item.stock})
              </span>
            </p>

            {/* Details Button */}
            <Link href={`/Products/${item._id}`}>
              <button className="mt-5 bg-[#03373D] hover:bg-[#05525A] text-white px-4 py-2 w-full rounded-lg font-semibold transition-all duration-300">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
