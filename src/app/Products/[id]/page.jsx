import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://khalids-dreams-server.vercel.app/products/${id}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  if (!product) {
    return (
      <h1 className="text-center text-2xl font-semibold my-20 text-red-500">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-16 px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Product Image Section */}
      <div className="relative">
        <Image
          src={product.productUrl}
          alt={product.productTitle}
          width={600}
          height={500}
          className="rounded-xl shadow-lg w-full object-cover"
        />

        {/* Status Badge */}
        <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
          {product.status}
        </span>
      </div>

      {/* Product Info Section */}
      <div className="p-5 border rounded-xl shadow-lg bg-white">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#03373D]">
          {product.productTitle}
        </h1>

        {/* Category */}
        <p className="text-gray-500 mt-1">
          Category:{" "}
          <span className="font-semibold text-gray-700">
            {product.category}
          </span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400 mt-3 text-lg">
          ★★★★☆
          <span className="text-gray-600 text-sm ml-1">
            ({product.stock} in stock)
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-5 flex items-center gap-4">
          <p className="text-3xl font-bold text-green-700">৳ {product.price}</p>

          <p className="text-gray-500 text-lg line-through">
            ৳ {(product.price * (1 + product.discountPrice / 100)).toFixed(0)}
          </p>

          <p className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discountPrice}% OFF
          </p>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 mt-4 text-lg">{product.shortDescription}</p>

        {/* Long Description */}
        {product.longDescription && (
          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.longDescription}
          </p>
        )}

        {/* Extra Info */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="border p-3 rounded-lg bg-gray-50">
            <p className="font-semibold">Weight:</p>
            <p className="text-gray-700">{product.weight} kg</p>
          </div>

          <div className="border p-3 rounded-lg bg-gray-50">
            <p className="font-semibold">Tags:</p>
            <p className="text-gray-700">{product.tags}</p>
          </div>
        </div>

        {/* Buttons */}
        <button className="mt-8 bg-[#03373D] hover:bg-[#05525A] text-white w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
