import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "./Products.slice";
import { getProductsSelector, removeProduct } from "./Products.slice";
import { getAppSelectore } from "../../store.hooks";
import { useAppDispatch } from "../../store.hooks";
import { addProductToCart } from "../../components/Cart/cart.slice";
import { Button, RemoveButton } from "../styles/Button.styled";
import { Wrapper } from "../styles/Wrapper.styled";

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
            <Wrapper>
              {`id:${product.id} ${product.title} ${product.packege}  ${product.price}$`}
              <RemoveButton onClick={() => removeProductFromState(product.id)}>
                X
              </RemoveButton>
              <Button onClick={() => addToCart(product)}>add to cart</Button>
            </Wrapper>
          </div>
        ))}
      </div>
    </>
  );
};
