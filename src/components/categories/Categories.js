import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../services/Api";
import {
  childVariants,
  fadeIn,
  StaggerContainer,
  textVariants,
} from "../../utils/motion";
import DottedLoading from "../loading/Loading";

const Categories = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) return <DottedLoading />;

  return (
    <motion.div
      variants={StaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="p-4 md:p-8 mt-12 mb-12"
    >
      <motion.h1
        variants={textVariants}
        className="text-4xl text-gray-800 font-semibold mb-6"
      >
        Shop By Category
      </motion.h1>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="flex items-center flex-wrap gap-2  w-full"
      >
        {data?.slice(0, 5)?.map((item, index) => (
          <motion.div
            custom={index}
            variants={childVariants}
            key={item?.id}
            onClick={() => navigate(`/category/${item?.id}`)}
            className="flex items-center gap-2 cursor-pointer border p-2 shadow-sm hover:shadow-md rounded-md w-full sm:w-[248px]"
          >
            <div className="w-24 h-24">
              <img
                src={item?.image}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <span className="text-lg">{item?.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Categories;
