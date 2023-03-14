import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, StaggerContainer } from "../../utils/motion";
import Wrapper from "../wrapper/Wrapper";

const ShowsAdd = () => {
  return (
    <Wrapper>
      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mb-12 overflow-hidden"
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.4, 1.4)}
          className="bg-gray-50 w-full"
        >
          <div className="flex justify-center items-center gap-4 flex-wrap-reverse md:flex-nowrap h-full">
            <div className=" w-full md:w-1/2 p-3 h-64 md:h-full flex flex-col justify-center text-center capitalize">
              <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4 ">
                Get ready to shop
              </h1>
              <span className="text-base md:text-xl font-semibold text-gray-700 ">
                Shop for your unique style Buy today and <br />
                enjoy today!
              </span>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/assets/shows2.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.4, 1.4)}
          className="bg-gray-50 w-full"
        >
          <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap h-full">
            <div className="w-full md:w-1/2">
              <img
                src="/assets/shows1.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className=" w-full md:w-1/2 p-3 h-64 md:h-full flex flex-col justify-center text-center capitalize">
              <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4 ">
                Shop now and save big
              </h1>
              <span className="text-base md:text-xl font-semibold text-gray-700 ">
                Upgrade your accessories game with
                <br />
                our selection
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

export default ShowsAdd;
