import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Logo and Company Info */}
        <div>
          <img
            src="/path/to/your/logo.png"
            alt="YourCompany Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-400 text-sm">
            We offer premium apartments and modern living spaces. Find your dream home with us.
          </p>
          <div className="mt-4">
            <a href="tel:+123456789" className="flex items-center text-gray-400 hover:text-sky-400">
              <FaPhoneAlt className="mr-2" />
              +1 (234) 567-89
            </a>
            <a href="mailto:contact@yourcompany.com" className="flex items-center text-gray-400 hover:text-sky-400 mt-2">
              <FaEnvelope className="mr-2" />
              contact@yourcompany.com
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-sky-400">Useful Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/privacy-policy" className="text-gray-400 hover:text-sky-400 transition-all duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-gray-400 hover:text-sky-400 transition-all duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-sky-400 transition-all duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-gray-400 hover:text-sky-400 transition-all duration-300">
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
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
          <h2 className="text-xl font-semibold mb-4 text-sky-400">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-4">Stay updated with the latest news and offers from us.</p>
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

      {/* Bottom Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
