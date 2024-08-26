import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center justify-between">
      <div className="text-white text-3xl font-light italic">
        Aersense<span className="text-red-600 ">™</span>
      </div>
      <div className="hidden md:flex flex-1 justify-center space-x-16">
        <a href="#rabbit-r1" className="text-white text-sm">
          rabbit r1
        </a>
        <a href="#rabbit-os" className="text-white text-sm">
          rabbit os
        </a>
        <a href="#research" className="text-white text-sm">
          research
        </a>
        <a href="#newsroom" className="text-white text-sm">
          newsroom
        </a>
        <a href="#support" className="text-white text-sm">
          support
        </a>
      </div>
      <button className="text-white md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l1.2 6h7.6l1.2-6M7 13h10m0 0H6"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;