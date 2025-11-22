// import img1 from '../../assets/banner1.jpg'
import Image from "next/image";

export default function Banner() {
  return (
    <div className='my-5'>
        <Image src='/banner1.jpg' alt="Banner" width={600} height={400}/>
    </div>
  );
}