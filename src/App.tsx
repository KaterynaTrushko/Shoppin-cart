import React from "react";
import "./App.css";
import { ProductsList } from "./Products/ProductsList";
import { FormProduct } from "./Products/Form";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>List of Pruducts</h2>
        <ProductsList />
        <FormProduct />
      </div>
    </Provider>
  );
}

export default App;
