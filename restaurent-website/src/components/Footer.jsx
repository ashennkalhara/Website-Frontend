import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">The Heritage Grill</h1>
          <p className="text-sm">
          Discover the magic of exquisite dining, where our chefs transform the finest ingredients into culinary masterpieces that tantalize the senses.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              About
            </a>
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              Menu
            </a>
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              Services
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              Special Offers
            </a>
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              Our Special Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              TheHeritageGrill@gmail.com
            </a>
            <a className="hover:text-brightColor transition-all cursor-pointer" href="/">
              +64 958 248 966
            </a>
            <div className="flex gap-4 pt-4">
              <a className="text-gray-400 hover:text-white transition-all" href="https://facebook.com">
                <BsFacebook size={24} />
              </a>
              <a className="text-gray-400 hover:text-white transition-all" href="https://twitter.com">
                <RiTwitterXFill size={24} />
              </a>
              <a className="text-gray-400 hover:text-white transition-all" href="https://instagram.com">
                <BsInstagram size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright 2024 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
