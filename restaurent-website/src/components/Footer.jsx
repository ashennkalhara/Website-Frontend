import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-16 px-6">
        {/* Company Description */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h1 className="font-bold text-2xl pb-4">The Heritage Grill</h1>
          <p className="text-sm leading-relaxed">
            Discover the magic of exquisite dining, where our chefs transform the finest ingredients into culinary masterpieces that tantalize the senses.
          </p>
        </div>

        {/* Links */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-semibold text-xl pb-4">Quick Links</h1>
          <nav className="flex flex-col gap-3">
            <a className="hover:text-yellow-400 transition-colors duration-300" href="/">
              About
            </a>
            <a className="hover:text-yellow-400 transition-colors duration-300" href="/">
              Menu
            </a>
            <a className="hover:text-yellow-400 transition-colors duration-300" href="/">
              Services
            </a>
          </nav>
        </div>

        {/* Menu */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-semibold text-xl pb-4">Menu Highlights</h1>
          <nav className="flex flex-col gap-3">
            <a className="hover:text-yellow-400 transition-colors duration-300" href="/">
              Special Offers
            </a>
            <a className="hover:text-yellow-400 transition-colors duration-300" href="/">
              Our Special Menu
            </a>
          </nav>
        </div>

        {/* Contact Us */}
        <div>
          <h1 className="font-semibold text-xl pb-4">Contact Us</h1>
          <nav className="flex flex-col gap-3">
            <a className="hover:text-yellow-400 transition-colors duration-300" href="mailto:TheHeritageGrill@gmail.com">
              TheHeritageGrill@gmail.com
            </a>
            <a className="hover:text-yellow-400 transition-colors duration-300" href="tel:+64958248966">
              +64 958 248 966
            </a>
            <div className="flex gap-6 pt-4">
              <a className="text-gray-400 hover:text-white transition-colors duration-300" href="https://facebook.com">
                <BsFacebook size={28} />
              </a>
              <a className="text-gray-400 hover:text-white transition-colors duration-300" href="https://twitter.com">
                <RiTwitterXFill size={28} />
              </a>
              <a className="text-gray-400 hover:text-white transition-colors duration-300" href="https://instagram.com">
                <BsInstagram size={28} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <p className="text-center text-sm">
          &copy; 2024 The Heritage Grill | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
