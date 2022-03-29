import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "./Products.slice";
import { getProductsSelector, removeProduct } from "../Products/Products.slice";
import { getAppSelectore } from "../store.hooks";
import { useAppDispatch } from "../store.hooks";

export const ProductsList: React.FC = () => {
  const products = getAppSelectore(getProductsSelector);
  const dispatch = useAppDispatch();

  const removeProductFromStote = (id: number) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <span>{`id:${product.id} ${product.title} ${product.packege}  ${product.price}$`}</span>
            <button onClick={() => removeProductFromStote(product.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
