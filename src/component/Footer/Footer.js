import React from 'react';
// import { FaXTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-5 bg-black text-gray-400 mt-1">
      <div className="flex space-x-6 mb-4">
        <a href="/thole" className="hover:text-white">AERSENSE </a>
        <a href="/my-orders" className="hover:text-white">my orders</a>
        <a href="/careers" className="hover:text-white">careers</a>
        <a href="/privacy-policy" className="hover:text-white">privacy policy</a>
        <a href="/warranty-return" className="hover:text-white">warranty & return</a>
        <a href="/terms-of-use" className="hover:text-white">terms of use</a>
      </div>
      <div className="text-sm">
        <p>AERSENSE inc. © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
