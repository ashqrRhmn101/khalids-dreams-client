"use client";

export default function Categories() {
  const items = [
    { title: "🍯 মধু বিভাগ", description: "", color: "from-amber-500 to-yellow-400" },
    { title: "🧈 ঘি ও তেল বিভাগ", color: "from-yellow-600 to-amber-500" },
    { title: "🌾 ছাতু, আটা ও শস্য বিভাগ", color: "from-green-500 to-lime-400" },
    { title: "🍚 চাল ও গুড় বিভাগ", color: "from-orange-500 to-yellow-500" },
    { title: "🥣 ছোট খাদ্য ও স্ন্যাকস বিভাগ", color: "from-rose-500 to-pink-400" },
  ];

  return (
    <div className="my-10 px-5">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-full shadow-md bg-gradient-to-r ${item.color} text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg`}
          >
            <h2 className="text-xl font-semibold text-center">{item.title}</h2>
            {/* <h2 className="text-xl font-semibold text-center">{item.description}</h2> */}
          </div>
        ))}
      </div>
    </div>
  );
}
