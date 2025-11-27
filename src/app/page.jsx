// import Image from "next/image";
// "use client"

import Banner from "./about/banner/page";
import Categories from "./about/categories/page";
import CustomerReview from "./about/review/page";
import AllProducts from "./Products/allProducts/page";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Categories/>
    <AllProducts/>
    <CustomerReview/>
    {/* <h2>Hello world </h2> */}
   </div>
  );
}
