import { motion } from "framer-motion";
import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import DottedLoading from "../../components/loading/Loading";
import { addTocart } from "../../redux/slices/cartSlice";
import { addTowishlist } from "../../redux/slices/wishlistSlice";
import { useGetSingleCategoryQuery } from "../../services/Api";
import { discount } from "../../utils/helper";
import { StaggerContainer, textVariants } from "../../utils/motion";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetSingleCategoryQuery(+id);

  // Add to wishlist
  const handleWishlist = (id) => {
    const wishItem = data?.find((item) => item?.id === id);
    dispatch(addTowishlist(wishItem));
  };

  //Add to cart
  const handleCarts = (id) => {
    const addItem = data?.find((item) => item?.id === id);
    dispatch(addTocart({ item: addItem, quantity: 1 }));
  };

  if (isLoading) return <DottedLoading />;
  return (
    <>
      <motion.div
        className="p-2 md:p-6"
        variants={StaggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <motion.div
          variants={textVariants}
          className="flex justify-evenly items-center gap-4 flex-wrap"
        >
          {data?.map((item) => (
            <motion.div
              key={item?.id}
              className="flex flex-col gap-6 border  hover:shadow-lg p-2 rounded-md shadow-md bg-white "
            >
              <div className="w-full sm:max-w-[220px] h-auto relative border rounded-md">
                <img
                  src={item?.images[0] ? item?.images[0] : item?.images[1]}
                  className="w-full h-full rounded-md object-cover transition duration-200 delay-100 hover:blur-[2px]"
                />

                <div className="flex flex-col gap-2 absolute top-2 right-2 text-gray-800">
                  <button
                    onClick={() => handleWishlist(item?.id)}
                    className="  rounded-full"
                  >
                    <AiOutlineHeart size={22} className=" font-bold" />
                  </button>

                  <button
                    onClick={() => navigate(`/products/${item?.id}`)}
                    className="  rounded-full"
                  >
                    <AiOutlineEye size={22} className=" font-bold" />
                  </button>

                  <button
                    onClick={() => handleCarts(item?.id)}
                    className="  rounded-full"
                  >
                    <BsCartPlus size={22} className=" font-bold" />
                  </button>
                </div>
                <div className="absolute -left-2 top-3 bg-yellow-400 -rotate-45 rounded-r-xl min-w-min p-[3px]">
                  <span className="text-sm">20% Sale</span>
                </div>
              </div>
              <h6 className="text-lg font-semibold text-gray-800">
                {item?.title}
              </h6>
              <div className="flex items-center gap-2 text-base">
                <span className="text-red-600 line-through">
                  ${item?.price}
                </span>
                <span>${discount(item?.price)}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default CategoryPage;
