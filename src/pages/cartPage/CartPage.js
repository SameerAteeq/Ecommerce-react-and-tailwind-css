import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Wrapper from "../../components/wrapper/Wrapper";
import {
  addTocart,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { discount, totalDiscount } from "../../utils/helper";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const { discountPrice, finalPrice } = totalDiscount(totalAmount);
  console.log(cartItems);

  //Increasing Quantity of an Item
  const increaseHandler = (id) => {
    const findingItem = cartItems?.find((item) => item.id === id);
    dispatch(
      addTocart({
        item: findingItem,
        quantity: 1,
      })
    );
  };

  //Decreasing Quantity of an Item
  const decreaseHandler = (id) => {
    dispatch(decreaseQuantity(id));
  };

  //Removing Item
  const removerhandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Wrapper>
      <div className="p-2 md:p-6">
        <h1 className="text-4xl text-gray-800 font-bold text-center m-6">
          Your Cart
        </h1>
        {cartItems?.length > 0 ? (
          <div className="flex gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex flex-col gap-2  w-full sm:w-1/2 overflow-y-auto h-screen ">
              {cartItems?.map((item) => (
                <>
                  <div
                    key={item?.id}
                    className="flex gap-2 relative bg-gray-100 p-2"
                  >
                    <div
                      className="w-32 cursor-pointer"
                      onClick={() => navigate(`/products/${item?.id}`)}
                    >
                      <img
                        src={item?.images[0]}
                        className="w-full h-full object-cover rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-base md:text-xl">{item?.title}</h1>
                      <h6>Price : ${discount(item?.price)}</h6>
                      <div className="flex gap-2">
                        <span>Quantity :</span>
                        <div className="flex gap-2">
                          <button
                            className="h-6 w-6 bg-gray-100 border"
                            onClick={() => decreaseHandler(item?.id)}
                          >
                            -
                          </button>

                          <span>{item?.quantity}</span>
                          <button
                            className="h-6 w-6 bg-gray-100 border"
                            onClick={() => increaseHandler(item?.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="absolute top-2 right-2"
                      onClick={() => removerhandler(item?.id)}
                    >
                      <GrClose size={10} />
                    </button>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="w-full sm:w-1/2 flex justify-center h-full">
              <div className="flex flex-col gap-2  border shadow-lg p-3 w-full md:w-1/2 h-full">
                <span className="text-lg text-gray-800 mb-1">
                  Order Summary
                </span>
                <hr />
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 ">
                    Selected ({cartItems?.length}) Items Price
                  </span>
                  <span className="text-base font-semibold text-gray-700">
                    ${totalAmount}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 ">Discount</span>
                  <span className="text-base font-semibold text-gray-700">
                    ${discountPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-16">
                  <span className="text-sm text-gray-600 ">Delivery Cost</span>
                  <span className="text-base font-semibold text-gray-700">
                    {cartItems?.length > 0 ? "$50" : "$0"}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-600 ">Grand Total:</span>
                  <span className="text-base font-semibold text-gray-700">
                    ${finalPrice ? finalPrice + 50 : 0}
                  </span>
                </div>
                <button className="bg-blue-800 p-2 rounded-md text-white">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mb-3">
            <h1>Cart is Empty</h1>
          </div>
        )}
      </div>
      <Footer />
    </Wrapper>
  );
};

export default CartPage;
