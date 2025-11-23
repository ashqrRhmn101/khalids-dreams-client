"use client";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CustomerReview() {
  const reviews = [
    {
      name: "Sumaiya Zannat",
      date: "2025-06-02",
      text: "আলহামদুলিল্লাহ, পণ্যগুলো হাতে পেয়ে সত্যিই মুগ্ধ। মধু, ঘি আর সিরিয়েল—সবকিছুই একদম ফ্রেশ ও অরিজিনাল। প্যাকেজিং এত সুন্দর ছিল যে মনে হয়েছে গিফট বক্স খুলছি। ইনশাআল্লাহ আবারও অর্ডার করব।",
    },
    {
      name: "Arif Mahmud",
      date: "2025-06-05",
      text: "দীর্ঘদিন ধরে বিশুদ্ধ মধু খুঁজছিলাম। অবশেষে এখানে পেয়ে গেলাম। স্বাদ, ঘনত্ব সবকিছু ১০/১০। ডেলিভারিও খুব দ্রুত ছিল। নির্দ্বিধায় সবাইকে রিকমন্ড করবো।",
    },
    {
      name: "Nusrat Jahan",
      date: "2025-06-10",
      text: "ঘি ও খেজুর সিরাপ দুটোই এক কথায় অসাধারণ। ঘি-এর সুবাস এবং সিরাপের প্রাকৃতিক স্বাদ—সবই খুব ভালো লেগেছে। শিশুদের জন্যও নিরাপদ, তাই নিশ্চিন্তে খাওয়াই।",
    },
    {
      name: "Mehedi Hasan",
      date: "2025-06-14",
      text: "চাল, গুড় ও আটা — তিনটাই ফ্রেশ এবং সম্পূর্ণ ভেজালমুক্ত। রান্না করে খেয়ে বুঝেছি, কোয়ালিটি নিয়ে কোনো আপস করেন না। এমন সার্ভিস আশা করিনি, সত্যিই ভালো লেগেছে।",
    },
    {
      name: "Tanisha Rahman",
      date: "2025-06-20",
      text: "স্ন্যাকস আর সিরিয়াল আইটেম গুলো একদম ঘরের তৈরি ফীল দিলো। বাচ্চারা খুব পছন্দ করেছে। সুন্দর প্যাকেটিং, ভালো সার্ভিস—সব মিলিয়ে এক কথায় পারফেক্ট!",
    },
  ];

  return (
    <div className="my-20 px-4 space-y-6">
      <h1 className="text-secondary text-3xl font-bold text-center">
        আমাদের গ্রাহকদের অভিজ্ঞতা
      </h1>

      <p className="text-center text-gray-700 mt-2 mb-16">
        বিশুদ্ধ, ভেজালমুক্ত এবং প্রাকৃতিক পণ্য সরবরাহ করাই আমাদের প্রতিশ্রুতি।
        আমাদের মধু, ঘি, সিরিয়াল, চাল, গুড়সহ প্রতিটি পণ্যই আসে সরাসরি খাঁটি উৎস
        থেকে— যাতে আপনি ও আপনার পরিবার পান নিরাপদ ও স্বাস্থ্যকর খাবারের
        নিশ্চয়তা।
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              {/* Top Section */}
              <div className="flex items-center gap-4">
                {/* Profile Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-gray-700">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>

                {/* Facebook Icon */}
                <span className="ml-auto text-blue-600 text-xl">
                  <i className="fab fa-facebook"></i>
                </span>
              </div>

              {/* Recommends Badge */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                  ✓
                </div>
                <p className="text-green-600 font-medium">recommends</p>
              </div>

              {/* Review Text */}
              <p className="mt-4 text-gray-700 leading-relaxed">
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
