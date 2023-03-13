import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../services/Api";
import wishlistReducer from "./slices/wishlistSlice.js";
import cartReducer from "./slices/cartSlice.js";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
const middleware = [...getDefaultMiddleware(), productsApi.middleware];
export const store = configureStore({
  reducer: rootReducer,
  middleware,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
