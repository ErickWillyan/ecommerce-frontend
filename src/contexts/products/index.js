import React, { useState, createContext, useContext, useEffect } from "react";
import { listAllProductsService } from "../../services/products/listAllProducts";

export const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function consult() {
      const response = await listAllProductsService();
      console.log(response);
      setProducts(response.data);
    }

    consult();
  }, [listAllProductsService]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
