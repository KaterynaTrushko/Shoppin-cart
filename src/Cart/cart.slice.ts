import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "../Products/Products.slice";

export interface CartProduct extends Product {
  amount: number;
}

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const indexProduct = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexProduct !== -1) {
        state[indexProduct].amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const indexCartProdux = state.findIndex(
        (product) => product.id == action.payload
      );
      if (state[indexCartProdux].amount > 1) {
        state[indexCartProdux].amount += -1;
      } else {
        return state.filter((product) => product.id !== action.payload);
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartSelecror = (state: RootState) => state.cart;

export const getTotalPrice = (state: RootState) =>
  state.cart.reduce((acc, next) => (acc += next.price * next.amount), 0);
