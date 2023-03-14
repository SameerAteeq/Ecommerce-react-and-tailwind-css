import React from "react";
import { toast } from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import DottedLoading from "../../components/loading/Loading";
import Wrapper from "../../components/wrapper/Wrapper";
import { addTocart } from "../../redux/slices/cartSlice";
import { useGetProductDetailQuery } from "../../services/Api";
import { discount } from "../../utils/helper";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data, isLoading } = useGetProductDetailQuery(productId);
  if (isLoading) return <DottedLoading />;

  const handleCarts = () => {
    dispatch(addTocart({ item: data, quantity: 1 }));
  };
  return (
    <>
      <div className="p-2 md:p-6 ">
        <Wrapper>
          <div className="flex w-full h-full gap-4 flex-wrap md:flex-nowrap items-center ">
            <div className="w-full md:w-1/2 h-1/2 flex flex-col gap-2">
              <img
                src={data?.images[0]}
                className="w-full h-full object-cover object-center bg-no-repeat rounded-md"
              />
              <div className="flex justify-evenly h-24  gap-2">
                {data?.images?.map((item, index) => (
                  <div key={index} className="w-full h-full">
                    <img
                      src={item}
                      className="w-full object-cover object-center bg-no-repeat rounded-md h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3 max-h-full">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {data?.title} ({data?.category?.name})
              </h1>
              <div className="flex items-center gap-2 text-xl">
                <span className="text-red-600 line-through">
                  ${data?.price}
                </span>
                <span>${discount(data?.price)}</span>
              </div>
              <span className=" text-sm md:text-base text-gray-800">
                {data?.description}
              </span>
              <button
                onClick={handleCarts}
                className="bg-blue-600 text-white w-max p-2 rounded-md flex items-center gap-2"
              >
                <BsCartPlus /> Add to cart
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
