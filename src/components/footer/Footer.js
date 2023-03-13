import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-800 text-white p-6 capitalize  w-full">
      <div className="flex justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-lg mb-2">Costumer Services</h2>
          <ul className="text-sm list-none flex flex-col gap-1">
            <li className="cursor-pointer hover:underline inline-block">
              <a href="#">Help & FAQ's</a>
            </li>
            <li className="cursor-pointer hover:underline inline-block">
              <a href="#">Order Tracking</a>
            </li>
            <li className="cursor-pointer hover:underline inline-block">
              <a href="#">Shipping & Delivery</a>
            </li>
            <li className="cursor-pointer hover:underline inline-block">
              <a href="#">Return</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg mb-2">Explore Us</h5>
          <ul className="text-sm list-none flex flex-col gap-1">
            <li className="cursor-pointer hover:underline">
              <a href="#">Brands</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Clothings</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">The brand room</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">New Arrival</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Furniture</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg mb-2">Our Store</h5>
          <ul className="text-sm list-none flex flex-col gap-1">
            <li className="cursor-pointer hover:underline">
              <a href="#">Tell us what you think</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Find a store</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Personal Stylish</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">New Arrival</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Furniture</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg mb-2">About Us</h5>
          <ul className="text-sm list-none flex flex-col gap-1">
            <li className="cursor-pointer hover:underline">
              <a href="#">Tell us what you think</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Contact</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Personal Stylish</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">New Arrival</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Furniture</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
