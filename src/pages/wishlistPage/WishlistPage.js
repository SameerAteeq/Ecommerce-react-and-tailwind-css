import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { truncate } from "../../utils/truncate";
import { removeToWishlist } from "../../redux/slices/wishlistSlice";
import { useLocalStorage } from "../../utils/useLocalStorage";
import Footer from "../../components/footer/Footer";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { discount } from "../../utils/helper";
import Wrapper from "../../components/wrapper/Wrapper";

const WishlistPage = () => {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  // Removing Item
  const removeItem = (id) => {
    dispatch(removeToWishlist(id));
    toast.success(`Item removed successfuly`);
  };

  return (
    <>
      <Wrapper>
        <h1 className="text-4xl text-gray-800 font-bold text-center m-12">
          Your Wishlist
        </h1>
        <div className=" mb-6">
          {wishlist?.length > 0 ? (
            <div className="flex flex-col gap-2">
              {wishlist?.map((item) => (
                <>
                  <div
                    className="flex justify-between bg-gray-50  hover:bg-gray-100 p-2 rounded-md"
                    key={item?.id}
                  >
                    <div
                      className="flex gap-2 items-center flex-wrap cursor-pointer"
                      onClick={() => navigate(`/products/${item.id}`)}
                    >
                      <div className="w-28 sm:w-44 md:w-52">
                        <img
                          src={item.images[0]}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h1 className=" text-base md:text-2xl font-semibold">
                          {truncate(item?.title, 24)}
                        </h1>
                        <span className="text-base md:tex-xl font-medium">
                          {item?.category?.name}
                        </span>
                        <div className="flex items-center gap-2 text-base">
                          <span className="text-red-600 line-through">
                            ${item?.price}
                          </span>
                          <span>${discount(item?.price)}</span>
                        </div>
                      </div>
                    </div>

                    <button onClick={() => removeItem(item?.id)}>
                      <GrClose />
                    </button>
                  </div>
                  <hr className="border" />
                </>
              ))}
            </div>
          ) : (
            <h1 className="text-center">Wishlist is Empty</h1>
          )}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default WishlistPage;
