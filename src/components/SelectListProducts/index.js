import { useContext } from "react";
import style from "./style.module.css";
import { ProductsContext } from "@/contexts/products";

export function SelectListProducts() {
  const { listProductsCamiseta, listProductsCaneca, listAllProducts } =
    useContext(ProductsContext);
  return (
    <div className={style.listProductsContainer}>
      <ul className={style.listSelect}>
        <li onClick={listAllProducts}>TODOS OS PRODUTOS</li>
        <li onClick={listProductsCamiseta}>CAMISETAS</li>
        <li onClick={listProductsCaneca}>CANECAS</li>
      </ul>

      <select className={style.select}>
        <option defaultValue>Organizar por</option>
        <option>Novidades</option>
        <option>Preço: Maior - Menor</option>
        <option>Preço: Menor - Maior</option>
        <option>Mais vendidos</option>
      </select>
    </div>
  );
}
