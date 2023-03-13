import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "../../utils/useLocalStorage";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: JSON.parse(localStorage.getItem("wishlist"))
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
  },
  reducers: {
    addTowishlist: (state, action) => {
      const newItem = action.payload;

      // Checking Item is already Exist or not
      const checkItem = state.items.find((item) => item.id === newItem.id);
      if (checkItem) {
        toast.error("Item is already added");
        return;
      }
      state.items.push(action.payload);
      toast.success("Item Added to wishlist");
      // Adding in localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    removeToWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Removing from LocalStorage
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { addTowishlist, removeToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
