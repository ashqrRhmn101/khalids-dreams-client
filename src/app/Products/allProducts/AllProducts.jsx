// // "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function AllProducts({ products }) {
//   return (
//     <div className="my-20">
//       <h1 className="text-4xl font-bold text-center">ALL Products</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
//         {products.map((item) => (
//           <div key={item._id} className="border p-4 rounded-lg shadow">
//             <Image
//               src={item.productUrl || "/placeholder.png"} 
//               alt={item.productTitle || "Product Image"}
//               width={300}
//               height={200}
//               className="rounded"
//             />

//             <h2 className="text-xl font-bold mt-3">{item.productTitle}</h2>

//             <p className="text-lg font-semibold mt-3">৳ {item.price}</p>

//             <Link href={`/Products/${item._id}`}>
//               <button className="mt-4 bg-green-600 text-white px-4 py-2 w-full rounded">
//                 Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
