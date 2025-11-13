import React from "react";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcAmex,
  FaCcMastercard,
  FaCcApplePay,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative text-white pt-16 pb-10 bg-[#001A33] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/banner1.png')",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/90 via-[#002B5B]/90 to-[#001A33]/95"></div>

      {/* Content */}
      <div className="relative w-full px-8 md:px-16">
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          {/* LEFT: Logo + description */}
          <div className="mb-10 max-w-lg">
            <div className="flex items-center space-x-4 mb-5">
              <img
                src="/assets/Logo1.png"
                alt="HrHub Logo"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-extrabold text-white tracking-wide">
                  Q-HR<span className="text-blue-400">.</span>
                </h1>
                <p className="text-lg text-gray-300 font-medium">
                  Quantum HR
                </p>
              </div>
            </div>

            {/* ✅ Description with line break */}
            <p className="text-gray-300 text-[18px] leading-relaxed mb-5 font-light">
              Sed porttitor erat mollis urna tempor,  <br />
              molestie tortor consequatm primis in faucibus.
            </p>

            <div className="flex space-x-5 text-3xl">
              <a href="#" className="hover:text-blue-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="text-gray-300 mb-10 lg:mb-0">
            <h3 className="font-semibold mb-4 text-3xl text-white">
              Get In Touch With Us
            </h3>
            <ul className="space-y-3 text-[18px] leading-relaxed font-light">
              <li className="flex flex-col gap-1">
                <span className="text-blue-400 font-semibold">Address:</span>
                <span className="text-gray-300">
                  No. 58 East Madison Road, <br /> USA 5004
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-blue-400 font-semibold">Phone:</span>
                <span className="text-gray-300">+000 123 456 789</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-blue-400 font-semibold">Email:</span>
                <span className="text-gray-300">support@example.com</span>
              </li>
            </ul>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-gray-300 text-[18px]">
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-3xl text-white">Support</h4>
              <ul className="space-y-2">
                <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer">Our Impact</li>
                <li className="hover:text-blue-400 cursor-pointer">Our Values</li>
                <li className="hover:text-blue-400 cursor-pointer">Resources</li>
                <li className="hover:text-blue-400 cursor-pointer">Videos</li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-semibold mb-4 text-3xl text-white">
                Information
              </h4>
              <ul className="space-y-2">
                <li className="hover:text-blue-400 cursor-pointer">
                  Press Releases
                </li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Mission & Vision
                </li>
                <li className="hover:text-blue-400 cursor-pointer">HR Policies</li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Employee Portal
                </li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Health & Safety
                </li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Employee Benefits
                </li>
              </ul>
            </div>

            {/* Recruitment */}
            <div>
              <h4 className="font-semibold mb-4 text-3xl text-white">
                Recruitment
              </h4>
              <ul className="space-y-2">
                <li className="hover:text-blue-400 cursor-pointer">Help Desk</li>
                <li className="hover:text-blue-400 cursor-pointer">IT Support</li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Campus Recruitment
                </li>
                <li className="hover:text-blue-400 cursor-pointer">Job Openings</li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Application Process
                </li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Internship Programs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-400 text-[17px] tracking-wide">
            © {new Date().getFullYear()} HrHub. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8 text-4xl text-gray-300">
            <FaCcVisa className="hover:text-blue-500 transition" />
            <FaCcAmex className="hover:text-blue-400 transition" />
            <FaCcMastercard className="hover:text-red-500 transition" />
            <FaCcPaypal className="hover:text-blue-400 transition" />
            <FaCcApplePay className="hover:text-gray-100 transition" />

            {/* Scroll Top */}
            <button
              onClick={scrollToTop}
              className="ml-4 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;   