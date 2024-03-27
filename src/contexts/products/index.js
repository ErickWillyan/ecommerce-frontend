import React, { useState, createContext, useContext, useEffect } from "react";
import { listAllProductsService } from "../../services/products/listAllProducts";
import { listThisProductsService } from "@/services/products/listThisProduct";

export const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const camiseta = "43eca295-5ff3-4447-a812-adaad2fce7f3";
  const caneca = "285b3af4-98f1-46ce-b9ca-4f821299637f";

  useEffect(() => {
    async function initAplication() {
      const response = await listAllProductsService();
      setProducts(response.data);
    }

    initAplication();
  }, [listAllProductsService]);

  async function listAllProducts() {
    const response = await listAllProductsService();
    setProducts(response.data);
  }

  async function listProductsCamiseta() {
    const response = await listThisProductsService({
      id: camiseta,
    });
    setProducts(response.data);
  }

  async function listProductsCaneca() {
    const response = await listThisProductsService({
      id: caneca,
    });
    setProducts(response.data);
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        listAllProducts,
        listProductsCamiseta,
        listProductsCaneca,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
