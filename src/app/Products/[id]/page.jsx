// import products from "@/app/Products/data/products.json";
import products from "@/app/Products/data/products.json";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  // selected product
  const product = products.find((item) => item.id == id);
  console.log(product);

  // No Product
  if (!product) {
    return <h1 className="text-center text-2xl my-20">Product Not Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto my-20 p-5 border rounded-lg shadow">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={300}
        className="rounded"
      />

      <h1 className="text-3xl font-bold mt-5">{product.title}</h1>
      <p className="text-gray-700 mt-3">{product.description}</p>

      <p className="text-2xl font-semibold mt-4">৳ {product.price}</p>
    </div>
  );
}
