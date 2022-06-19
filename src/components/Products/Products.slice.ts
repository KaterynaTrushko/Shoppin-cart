import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface Product {
  id: number;
  title: string;
  packege: string;
  price: number;
}

const initialState: Product[] = [
  { id: 1, title: "Milk (regular)", packege: "0.25 liter", price: 5 },
  {
    id: 2,
    title: "Loaf of Fresh White Bread",
    packege: "125.00 g",
    price: 6,
  },
  { id: 3, title: "Rice (white),", packege: "0.10 kg", price: 9 },
  { id: 4, title: "Eggs (regular)", packege: "2.40", price: 6 },
  { id: 5, title: "Local Cheese", packege: "0.10 kg", price: 7 },
  // { id: 6, title: "Chicken Fillets", packege: "0.15 kg", price: 6 },
  // { id: 7, title: "Beef Round", packege: "0.15 kg", price: 2 },
  // { id: 8, title: "Apples", packege: "0.30 kg", price: 4 },
  // { id: 9, title: "Banana", packege: "0.25 kg", price: 3 },
  // { id: 10, title: "Oranges", packege: "0.30 kg", price: 3 },
  // { id: 11, title: "Tomato", packege: "0.20 kg", price: 2 },
  // { id: 12, title: "Potato", packege: "0.20 kg", price: 3 },
  // { id: 13, title: "Onion", packege: "0.10 kg", price: 5 },
  // { id: 14, title: "Lettuce", packege: "0.20 head", price: 7 },
];

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [action.payload, ...state]; immer
      state.unshift(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getProductsSelector = (state: RootState) => state.products;

export default productsSlice.reducer;
