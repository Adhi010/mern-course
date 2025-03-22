import axios from "axios";
import { create } from "zustand";
const apiUrl = "https://mern-course-8rqs.onrender.com";
export const useProductsStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),
  getProducts: async () => {
    try {
      const response = await axios.get(apiUrl + "/api/products");
      set({ products: response?.data?.data });
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      await axios.delete(apiUrl + "/api/products", {
        params: { id: id },
      });
      set((state) => ({
        products: state?.products?.filter((x) => x._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
