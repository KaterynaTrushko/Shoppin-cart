import React from "react";
import { getCartSelecror, getTotalPrice } from "./cart.slice";
import { getAppSelectore } from "../../store.hooks";
import { useAppDispatch } from "../../store.hooks";
import { removeProductFromCart } from "./cart.slice";
import { RemoveButton } from "../styles/Button.styled";

export const Cart: React.FC = () => {
  const dicpatch = useAppDispatch();
  const cartProduct = getAppSelectore(getCartSelecror);
  const totalPrice = getAppSelectore(getTotalPrice);

  const removeProduct = (id: number) => {
    dicpatch(removeProductFromCart(id));
  };

  return (
    <>
      <h2>Cart</h2>
      {cartProduct.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} __amount:${product.amount}  ___price:${
            product.price
          }$  ___total:${product.amount * product.price}$`}</span>
          <RemoveButton onClick={() => removeProduct(product.id)}>
            X
          </RemoveButton>
        </div>
      ))}
      <div>TOTAL:{totalPrice}</div>
    </>
  );
};
