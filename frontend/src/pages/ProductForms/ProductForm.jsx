import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./ProductForm.css";

const productSchema = z.object({
  name: z.string().min(3).max(20),
  price: z.number().min(1),
  image: z.string().min(3),
});
const ProductForm = ({ initialValues = {} }) => {
  console.log("initialValues==", initialValues);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: { ...initialValues },
  });
  console.log(errors);
  const onSubmit = async (values) => {
    try {
      let response = "";
      if (initialValues?._id) {
        response = await axios.put(
          "http://localhost:5000/api/products?id=" + initialValues?._id,

          {
            ...values,
          }
        );
        console.log("inside if");
      } else {
        response = await axios.post("http://localhost:5000/api/products", {
          ...values,
        });
      }
      if (response?.data?.success) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="form-wrapper">
        <form className="form-container">
          <input
            type="text"
            name="Name"
            {...register("name")}
            placeholder="Product Name"
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
          <input
            type="text"
            name="Price"
            {...register("price", { valueAsNumber: true })}
            placeholder="Product Price"
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
          <input
            type="text"
            name="Image"
            {...register("image")}
            placeholder="Product Image"
          />
          {errors?.image && <span>{errors?.image?.message}</span>}
          <button onClick={handleSubmit(onSubmit)}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
