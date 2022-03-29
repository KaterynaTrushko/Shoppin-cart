import React from "react";
import { useState } from "react";
import { ProductsList } from "./ProductsList";
import { Product } from "./Products.slice";
import { useDispatch } from "react-redux";
import { addProduct } from "./Products.slice";
import { useAppDispatch } from "../store.hooks";

export const FormProduct: React.FC = () => {
  const dispatch = useDispatch();

  const [products, setProduct] = useState<Product>({
    id: 0,
    title: " ",
    packege: "",
    price: 0,
  });

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct(products));
    setProduct({
      id: 0,
      title: " ",
      packege: "",
      price: 0,
    });
  };

  const hendleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newProd = { ...prev, id: Date.now() };
      return newProd;
    });
  };

  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          placeholder="input title"
          name="title"
          value={products.title}
          onChange={hendleChange}
        />
        <input
          type="text"
          placeholder="input description"
          name="packege"
          value={products.packege}
          onChange={hendleChange}
        />
        <input
          type="number"
          placeholder="input price"
          name="price"
          value={products.price}
          onChange={hendleChange}
        />
        <button type="submit">add produdt</button>
      </form>
    </>
  );
};
