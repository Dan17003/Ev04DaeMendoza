import { create } from "zustand";
import { fetchProducts } from "../services/products-service";

export const useProductsStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  getProducts: async () => {
    set({ loading: true, error: null });
    try {
      const products = await fetchProducts();
      set({ products });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
