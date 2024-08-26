import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      <button className="text-white md:hidden" onClick={toggleSidebar}>
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
            d="M3 3h18M3 12h18M3 21h18"
          />
        </svg>
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-8 md:hidden">
          <a href="#rabbit-r1" className="text-white text-lg" onClick={toggleSidebar}>
            rabbit r1
          </a>
          <a href="#rabbit-os" className="text-white text-lg" onClick={toggleSidebar}>
            rabbit os
          </a>
          <a href="#research" className="text-white text-lg" onClick={toggleSidebar}>
            research
          </a>
          <a href="#newsroom" className="text-white text-lg" onClick={toggleSidebar}>
            newsroom
          </a>
          <a href="#support" className="text-white text-lg" onClick={toggleSidebar}>
            support
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;