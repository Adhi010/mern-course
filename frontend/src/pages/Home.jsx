import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./card/Card.jsx";
import "./card/Card.css";
import "./Home.css";
import { useProductsContext } from "./context/ProductsContextProvider.jsx";
const apiUrl = "https://mern-course-8rqs.onrender.com/";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const { state, dispatch } = useProductsContext();
  console.log({ state, dispatch });
  const fetchProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(apiUrl + "api/products");
      // console.log(response);
      setProducts(response.data?.data);
      // dispatch is not a function
      dispatch({
        type: "setProducts",
        payload: response.data?.data,
      });
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
    // const response = await fetch("http://localhost:5000/api/products");
    // const data = await response.json();
    // setProducts(data.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong...</h1>}
      {/* {products?.map((products, index) => {
      return <h1 key={index}>{products.name}</h1>;
    }
    )}  */}
      <div className="card-wrapper">
        {products?.map((x, index) => {
          // console.log(x.image);

          return (
            <Card
              key={index}
              product={x}
              val={index}
              products={products}
              setProducts={setProducts}
            />
          );
        })}
      </div>
    </div>

    // <Card />
  );
};

export default Home;
