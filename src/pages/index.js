import { useContext } from "react";
import { Header } from "../components/Header";
import { SelectListProducts } from "../components/SelectListProducts";
import { CardProduct } from "@/components/CardProduct";
import style from "../styles/style.module.css";

import { ProductsContext } from "../contexts/products";

export default function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <SelectListProducts />
        <article className={style.listProducts}>
          {products.map((item) => (
            <CardProduct id={item.id} name={item.name} price={item.price} />
          ))}
        </article>
      </main>
    </>
  );
}
