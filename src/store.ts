import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import products from "./Products/Products.slice";

export const store = configureStore({
  reducer: {
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
