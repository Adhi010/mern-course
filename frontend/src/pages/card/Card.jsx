import React from "react";
import "./Card.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Card = ({ product, val, products, setProducts }) => {
  //   console.log("product== ", product);
  //   console.log("name== ", product.name);
  //   console.log("image== ", product.image);
  // console.log("key== ", val);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      // await axios.delete("http://localhost:5000/api/products?id=" + id);
      await axios.delete("http://localhost:5000/api/products", {
        params: { id },
      });
      const filteredData = products.filter((x) => {
        x._id != id;
      });
      setProducts(filteredData);
      // return <Home />;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div key={val} className="card-container">
      <div className="image-container">
        <img className="card-image" src={product.image} alt="image" />
      </div>
      <div className="card-content">
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <div className="card-buttons">
          <button
            onClick={() => {
              handleEdit(product._id);
            }}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
