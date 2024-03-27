import style from "./style.module.css";

export function SelectListProducts() {
  return (
    <div className={style.listProductsContainer}>
      <ul className={style.listSelect}>
        <li>
          {" "}
          <p className={style.firstItemList}> TODOS OS PRODUTOS</p>
        </li>
        <li>CAMISETAS</li>
        <li>CANECAS</li>
      </ul>

      <select className={style.select}>
        <option disabled selected hidden>
          Organizar por
        </option>
        <option>Novidades</option>
        <option>Preço: Maior - Menor</option>
        <option>Preço: Menor - Maior</option>
        <option>Mais vendidos</option>
      </select>
    </div>
  );
}
