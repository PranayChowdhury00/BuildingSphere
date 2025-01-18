import logo from "/logo.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20 min-h-screen">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Logo and Company Info */}
        <div>
          <img src={logo} alt="BuildingSphere" className="w-24 mb-4" />
          <p className="text-gray-400 text-sm">
            We offer premium apartments and modern living spaces. Find your
            dream home with us.
          </p>
          <div className="mt-4">
            <a
              href="tel:+123456789"
              className="flex items-center text-gray-400 hover:text-sky-400"
            >
              <FaPhoneAlt className="mr-2" />
              (+880) 1303572144
            </a>
            <a
              href="pranaychowdhury00@gamail.com"
              className="flex items-center text-gray-400 hover:text-sky-400 mt-2"
            >
              <FaEnvelope className="mr-2" />
              pranaychowdhury00@gamail.com
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Useful Links
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-sky-400 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-sky-400 transition-all duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-sky-400 transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-gray-400 hover:text-sky-400 transition-all duration-300"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-sky-400">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://web.facebook.com/profile.php?id=100012847321071"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://x.com/pranayChow00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/i_am_pranay_chowdhury/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/pranay-chowdhury-741396318/?fbclid=IwY2xjawHyD8dleHRuA2FlbQIxMAABHSZeDWFmGBQSByLWkKUy4WAQ-7I4YtJrfojtH2Pl2sI1xtgE16cIlADGfg_aem_rgjszjch_rClhavfiuhlcA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest news and offers from us.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md border-none outline-none text-gray-800"
            />
            <button className="px-6 py-2 bg-sky-400 text-white rounded-r-md hover:bg-sky-500 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="ml-[5%] mr-[5%] mt-7"/>
      {/* Bottom Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BuildingSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
