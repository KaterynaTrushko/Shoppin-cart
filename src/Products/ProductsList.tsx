import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "./Products.slice";
import { getProductsSelector, removeProduct } from "../Products/Products.slice";
import { getAppSelectore } from "../store.hooks";
import { useAppDispatch } from "../store.hooks";
import { addProductToCart } from "../Cart/cart.slice";

export const ProductsList: React.FC = () => {
  const products = getAppSelectore(getProductsSelector);

  const dispatch = useAppDispatch();

  const removeProductFromState = (id: number) => {
    dispatch(removeProduct(id));
  };

  const addToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <>
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <span>{`id:${product.id} ${product.title} ${product.packege}  ${product.price}$`}</span>
            <button onClick={() => removeProductFromState(product.id)}>
              X
            </button>
            <button onClick={() => addToCart(product)}>add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
