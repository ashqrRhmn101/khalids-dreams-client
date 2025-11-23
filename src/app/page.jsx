// import Image from "next/image";

import Banner from "./about/banner/page";
import Categories from "./about/categories/page";
import CustomerReview from "./about/review/page";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Categories/>
    <CustomerReview/>
    {/* <h2>Hello world </h2> */}
   </div>
  );
}
