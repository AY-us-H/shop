// src/components/Footer.js
import React from 'react';
import { FaHome, FaHeart, FaList, FaShoppingCart, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black p-4 fixed bottom-0 w-full flex justify-around">
      <div className="flex items-center">
        <FaHome className="mr-2" />
        Home
      </div>
      <div className="flex items-center">
        <FaHeart className="mr-2" />
        Favorites
      </div>
      <div className="flex items-center">
        <FaList className="mr-2" />
        Categories
      </div>
      <div className="flex items-center">
        <FaShoppingCart className="mr-2" />
        Cart
      </div>
      <div className="flex items-center">
        <FaUser className="mr-2" />
        Account
      </div>
    </div>
  );
};

export default Footer;
