import React from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from "../assets/SocialIcon";
const Footer = () => {
  return (
    <div className="mx-auto container py-12 xl:px-6 lg:px-6 sm:px-6 px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-8 gap-4 justify-items-left pl-4 sm:pl-32 lg:pl-0">
        <div className="flex flex-col flex-shrink-1">
          <div className="
          font-medium text-rose-500 text-ellipsis text-lg
          ">
            <span className="text-indigo-500 text-2xl">Strike</span> Zone
          </div>
          <p className="text-sm leading-none text-gray-800 mt-4 dark:text-white">Copyright ©
            {new Date().getFullYear()} Strike Zone.</p>
          <p className="text-sm leading-none text-gray-800 mt-4 dark:text-white">All rights reserved</p>
          <div className="flex items-center gap-x-1 sm:gap-x-4 mt-6">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-8 h-8 flex-shrink-0  cursor-pointer hover:bg-[#e95950] rounded-full flex items-center justify-center transition duration-400 ease-in-out hover:scale-105 transform">
              <InstagramIcon />
            </a>
            <a href="https://mybk.hcmut.edu.vn/" target="_blank" rel="noreferrer" className="w-8 h-8 flex-shrink-0  cursor-pointer hover:bg-[#0000c6] rounded-full flex items-center justify-center transition duration-400 ease-in-out hover:scale-105 transform">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="w-8 h-8 flex-shrink-0  cursor-pointer hover:bg-[#0072b1] rounded-full flex items-center justify-center transition duration-400 ease-in-out hover:scale-105 transform">
              <LinkedInIcon />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="w-8 h-8 flex-shrink-0  cursor-pointer hover:bg-[#c11818d1] rounded-full flex items-center justify-center transition duration-400 ease-in-out hover:scale-105 transform">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div className="hidden md:block *:dark:text-white">
          <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blog</p>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact us</p>
        </div>
        <div className="hidden md:block *:dark:text-white">
          <h2 className="text-base font-semibold leading-4 text-gray-800">Support</h2>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Legal policy</p>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Status policy</p>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Privacy policy</p>
        </div>
        <div className="*:dark:text-white">
          <h2 className="text-base font-semibold leading-4 text-gray-800">Contact</h2>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Shoes Nepal</p>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer"> Store Location</p>
          <p className="hover:text-gray-500 dark:hover:text-gray-200 text-base leading-4 mt-6 text-gray-800 cursor-pointer"> Contact Info</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
