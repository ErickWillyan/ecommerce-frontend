import { Header } from "../components/Header";
import style from "../styles/style.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.mainContainer}>
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
            <option className={style.option} disabled selected hidden>
              Organizar por
            </option>
            <option className={style.option}>
              <p>Novidades</p>
            </option>
            <option className={style.option}>
              <p>Preço: Maior - Menor</p>
            </option>
            <option className={style.option}>
              <p>Preço: Menor - Maior</p>
            </option>
            <option className={style.option}>
              <p>Mais vendidos</p>
            </option>
          </select>
        </div>
      </main>
    </>
  );
}
