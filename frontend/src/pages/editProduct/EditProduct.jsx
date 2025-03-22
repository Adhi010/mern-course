import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../ProductForms/ProductForm";

const EditProduct = () => {
  const apiUrl = "https://mern-course-8rqs.onrender.com";
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl + "/api/products");
      //doubt
      // const data = response?.data?.data?.find((x) => {
      //   x._id === id;
      // });

      const data = response?.data?.data?.find((x) => x._id === id);
      console.log("data==", data);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="title">Edit Page</h2>
      {Object.keys(product)?.length > 0 && (
        <ProductForm initialValues={product} />
      )}
    </div>
  );
};

export default EditProduct;
