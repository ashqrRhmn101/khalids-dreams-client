import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content mt-10">
      {/* Top Section */}
      <footer className="footer sm:footer-horizontal p-10">
        {/* Brand Info */}
        <aside>
          <h2
            className="text-3xl font-bold 
            bg-gradient-to-r from-[#03373D] to-[#04666F] 
            bg-clip-text text-transparent"
          >
            KhalidS DreamS
          </h2>
          <p className="mt-3 text-gray-600 leading-6 max-w-xs">
            খাঁটি ও বিশ্বস্ত পণ্য আপনার হাতে পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            মানসম্পন্ন মধু, ঘি, চাল, ছাতু, শস্যসহ নিত্যপ্রয়োজনীয় পণ্যে আমরা
            সবসময় অরিজিনাল ও ভেজালমুক্ত পণ্য নিশ্চিত করি।
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover">মধু & খাঁটি ঘি</a>
          <a className="link link-hover">অর্গানিক খাদ্যপণ্য</a>
          <a className="link link-hover">ফাস্ট ডেলিভারি</a>
          <a className="link link-hover">২৪/৭ কাস্টমার সাপোর্ট</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">আমাদের সম্পর্কে</a>
          <a className="link link-hover">যোগাযোগ</a>
          <a className="link link-hover">গোপনীয়তা নীতি</a>
          <a className="link link-hover">শর্তাবলী</a>
        </nav>
      </footer>

      {/* Bottom Section */}
      <footer className="footer border-t border-base-300 px-10 py-5">
        <aside className="grid-flow-col items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} KhalidS DreamS
            <br />
            সকল স্বত্ব সংরক্ষিত।
          </p>
        </aside>

        {/* Social Icons */}
        <nav className="md:place-self-center md:justify-self-end">
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.facebook.com/ashiqur1099"
              className="hover:text-[#03373D] transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/_ashqrrmn/"
              className="hover:text-[#03373D] transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/ashqrrmn"
              className="hover:text-[#03373D] transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/_ashqrrmn/"
              className="hover:text-[#03373D] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </nav>
      </footer>

      {/* Developer Credit */}
      <div className="text-center py-4 text-sm text-gray-600">
        Developed by{" "}
        <span className="font-semibold">
          <a href="https://github.com/ashqrRhmn101">Md. LAvib Uddin Ashik</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
