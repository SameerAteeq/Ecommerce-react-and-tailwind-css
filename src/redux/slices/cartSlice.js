import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { discount } from "../../utils/helper";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    totalAmount: parseInt(localStorage.getItem("TotalAmount"))
      ? parseInt(localStorage.getItem("TotalAmount"))
      : 0,
  },
  reducers: {
    addTocart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.findIndex((i) => i.id === item.id);
      if (existingItem >= 0) {
        state.items[existingItem].quantity += quantity;
        toast.success("Increased Quantity");
      } else {
        state.items.push({ ...item, quantity });
        toast.success("Item Added to cart");
      }

      let discountAmount = discount(item.price);
      state.totalAmount += discountAmount * quantity;
      localStorage.setItem("TotalAmount", state.totalAmount);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const itemIdToremove = action.payload;
      const existtingItem = state.items.find(
        (item) => item.id === itemIdToremove
      );

      if (existtingItem) {
        let discountAmount = discount(existtingItem.price);
        state.totalAmount -= discountAmount * existtingItem.quantity;
        state.items = state.items.filter((item) => item.id !== itemIdToremove);
      }
      localStorage.setItem("TotalAmount", state.totalAmount);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity--;
        state.totalAmount -= discount(existingItem.price);
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
      localStorage.setItem("TotalAmount", state.totalAmount);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addTocart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
