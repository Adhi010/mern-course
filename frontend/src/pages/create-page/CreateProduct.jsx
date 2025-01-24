import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./CreateProduct.css";
import ProductForm from "../ProductForms/ProductForm";

//moved to product form
// const productSchema = z.object({
//   name: z.string().min(3).max(20),
//   price: z.number().min(1).max(6),
//   image: z.string().min(3),
// });

const CreateProduct = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [image, setImage] = useState("");

  //moved to productForm
  // const navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(productSchema),
  // });
  // console.log(errors);
  // const onSubmit = async (values) => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/products", {
  //       ...values,
  //     });
  //     if (response?.data?.success) {
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // function handleSubmit() {
  //   console.log("hai");
  //   console.log({ name, price, image });
  // }

  return (
    <>
      <div>
        <h2 className="title">Create Product </h2>
        <ProductForm />
        {/* 
        //moved toproduct form
        
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
        </div> */}
      </div>
    </>
  );
};
export default CreateProduct;
