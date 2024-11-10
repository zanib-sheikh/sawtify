// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-10 bg-gradient-to-br from-gray-700 to-gray-900 px-8 py-2 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-semibold text-white">Swatify</h1>

      {/* Menu Items */}
      <ul className="hidden md:flex text-white space-x-8">
        <li className="hover:text-gray-300 cursor-pointer">Product</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">How it works</li>
        <li className="hover:text-gray-300 cursor-pointer">Use Cases</li>
      </ul>

      {/* Request a Demo Button */}
      <button className="hidden md:block bg-gradient-to-r from-purple-600 to-orange-400 px-4 py-2 rounded-full font-semibold text-white">
        Request A Demo ➡
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
