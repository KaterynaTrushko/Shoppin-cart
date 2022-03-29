import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import products from "./Products/Products.slice";
import cart from "./Cart/cart.slice";

export const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
