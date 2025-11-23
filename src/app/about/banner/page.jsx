// import img1 from '../../assets/banner1.jpg'
import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="my-5 flex flex-col md:flex-row">
      {/* <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <Image src="/banner1.jpg" alt="Banner" width={600} height={400} />
        </div>
        <div>
          <Image src="/banner2.jpg" alt="Banner" width={600} height={400} />
        </div>
        <div>
          <Image src="/banner3.jpg" alt="Banner" width={600} height={400} />
        </div>
        <div>
          <Image src="/banner4.jpg" alt="Banner" width={600} height={400} />
        </div>
      </Carousel> */}

      <div className="carousel md:w-[70%] w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src="/banner1.jpg" alt="Banner" width={800} height={400} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src="/banner2.jpg" alt="Banner" width={800} height={400} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src="/banner3.jpg" alt="Banner" width={800} height={400} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src="/banner4.jpg" alt="Banner" width={800} height={400} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" md:w-[30%] w-full p-10 flex flex-col items-center justify-center">
        <h2 className="text-green-400 text-6xl font-bold">HEALTHY <br /><span className="text-5xl font-bold text-black">FOOD</span ></h2>
        <button className="bg-green-500 text-white rounded-4xl btn mt-5 w-full">ORDER NOW</button>
      </div>
    </div>
  );
}
