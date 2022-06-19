import React from "react";
import { ProductsList } from "./components/Products/ProductsList";
import { FormProduct } from "./components/Products/Form";
import { Provider } from "react-redux";
import { store } from "./store";
import { Cart } from "./components/Cart/Cart";
import { Container } from "./components/styles/Container.style";
import GlobalStyle from "./components/styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Container>
          <h2>List of Pruducts</h2>
          <ProductsList />
          <FormProduct />
          <Cart />
        </Container>
      </Provider>
    </>
  );
}

export default App;
