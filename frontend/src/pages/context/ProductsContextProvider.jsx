import react, { createContext, useContext, useReducer } from "react";

const INITIAL_VALUE = {
  products: [],
  userName: "Adhi",
};

const ProductsContext = createContext(INITIAL_VALUE);

export const useProductsContext = () => useContext(ProductsContext);

const setProducts = (state, value) => {
  return { ...state, products: value };
};

const productsContextReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "setProducts":
      return setProducts(state, action.payload);
    default:
      return {
        ...state,
        ...action?.payload,
      };
  }
};

const ProductsProvider = ({ children, updates = INITIAL_VALUE }) => {
  const [state, dispatch] = useReducer(productsContextReducer, updates);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
