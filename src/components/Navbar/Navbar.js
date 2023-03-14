import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { AiTwotoneHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../wrapper/Wrapper";

const Navbar = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [shadowShow, setShadowShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  //Shadow
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setShadowShow(true);
      } else {
        setShadowShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 bg-white z-10 w-full ${
        shadowShow ? "shadow-md transition" : ""
      }`}
    >
      <Wrapper>
        <div className="flex justify-between items-center flex-wrap w-full gap-6 p-4 md:p-6">
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className="flex justify-center items-center gap-1">
              <IoMenu
                onClick={() => setShowNavbar(!showNavbar)}
                size={25}
                className={`cursor-pointer md:hidden text-blue-900`}
              />
              <Link to={"/"}>
                <img
                  src="/assets/logo.png"
                  className="w-36  object-cover hidden md:block"
                />
                <img
                  src="/assets/logo2.png"
                  className="w-24  object-cover block md:hidden"
                />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div
                onClick={() => navigate("/carts")}
                className=" relative block md:hidden"
              >
                <HiOutlineShoppingBag
                  size={25}
                  className="block md:hidden text-blue-900 cursor-pointer"
                />
                {cartItems.length > 0 && (
                  <span className="text-sm flex justify-center items-center absolute top-[-10px] left-[-5px] bg-red-600 h-5 w-5 p-1 rounded-full text-white">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <div
                onClick={() => navigate("/wishlist")}
                className=" relative block md:hidden"
              >
                <AiTwotoneHeart
                  size={27}
                  className=" text-blue-900 cursor-pointer"
                />
                {wishlist.length > 0 && (
                  <span className="text-sm flex justify-center items-center absolute top-[-10px] left-[-5px] bg-red-600 h-5 w-5 p-1 rounded-full text-white">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <div
                onClick={() => navigate("/login")}
                className=" relative block md:hidden"
              >
                <MdOutlineAccountCircle
                  size={27}
                  className=" text-blue-900 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex  items-center gap-2 w-full md:w-auto">
            <div className="flex justify-center items-center bg-gray-100 rounded-3xl gap-2 p-3 w-full md:w-96">
              <input
                placeholder="Search..."
                typeof="text"
                className="outline-none border-none bg-transparent w-full"
              />
              <BsSearch size={25} className="text-blue-900 cursor-pointer" />
            </div>
            <div
              onClick={() => navigate("/carts")}
              className="relative hidden md:block"
            >
              <HiOutlineShoppingBag
                size={27}
                className="hidden md:block text-blue-900 cursor-pointer"
              />
              {cartItems.length > 0 && (
                <span className="text-sm flex justify-center items-center absolute top-[-10px] left-[-5px] bg-red-600 h-5 w-5 p-1 rounded-full text-white">
                  {cartItems.length}
                </span>
              )}
            </div>
            <div
              onClick={() => navigate("/wishlist")}
              className="relative hidden md:block"
            >
              <AiTwotoneHeart
                size={27}
                className=" text-blue-900 cursor-pointer"
              />
              {wishlist.length > 0 && (
                <span className="text-sm flex justify-center items-center absolute top-[-10px] left-[-5px] bg-red-600 h-5 w-5 p-1 rounded-full text-white">
                  {wishlist.length}
                </span>
              )}
            </div>

            <div
              onClick={() => navigate("/login")}
              className=" relative hidden md:block"
            >
              <MdOutlineAccountCircle
                size={27}
                className=" text-blue-900 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <hr />
      <Wrapper>
        {/* Categories Navbar */}

        <ul className=" hidden md:flex justify-between list-none p-4 md:p-4 ">
          <li
            className="text-sm font-bold text-gray-700 cursor-pointer"
            onClick={() => navigate("category/1")}
          >
            Colthes
          </li>
          <li
            className="text-sm font-bold text-gray-700 cursor-pointer"
            onClick={() => navigate("category/2")}
          >
            Electronincs
          </li>
          <li
            className="text-sm font-bold text-gray-700 cursor-pointer"
            onClick={() => navigate("category/3")}
          >
            Furniture
          </li>
          <li
            className="text-sm font-bold text-gray-700 cursor-pointer"
            onClick={() => navigate("category/4")}
          >
            Shoes
          </li>
          <li
            className="text-sm font-bold text-gray-700 cursor-pointer"
            onClick={() => navigate("category/5")}
          >
            Others
          </li>
        </ul>
      </Wrapper>
      <hr />
      {/* For Small Devices */}

      <ul
        className={`${
          showNavbar ? "translate-x-0" : "translate-x-[-300%] box-border"
        }transition duration-700 flex justify-between flex-col gap-4 list-none p-4 md:p-8 absolute top-14 left-3 bg-white w-1/2 rounded-md shadow-lg border overflow-hidden`}
      >
        <li
          className="text-sm font-bold text-gray-700 cursor-pointer"
          onClick={() => navigate("category/1")}
        >
          Colthes
        </li>
        <li
          className="text-sm font-bold text-gray-700 cursor-pointer"
          onClick={() => navigate("category/2")}
        >
          Electronincs
        </li>
        <li
          className="text-sm font-bold text-gray-700 cursor-pointer"
          onClick={() => navigate("category/3")}
        >
          Furniture
        </li>
        <li
          className="text-sm font-bold text-gray-700 cursor-pointer"
          onClick={() => navigate("category/4")}
        >
          Shoes
        </li>
        <li
          className="text-sm font-bold text-gray-700 cursor-pointer"
          onClick={() => navigate("category/5")}
        >
          Others
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
