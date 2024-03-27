import style from "./style.module.css";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

export function Header() {
  return (
    <header className={style.containerHeader}>
      <a className={style.logoName} href="/">
        capputeeno
      </a>
      <div className={style.sourceDiv}>
        <div className={style.sourceContainer}>
          <input
            className={style.sourceInput}
            placeholder="procurando por algo específico?"
          />
          <CiSearch
            size={24}
            color="rgba(115, 115, 128, 1)"
            className={style.iconSource}
          />
        </div>
        <FiShoppingBag size={24} color="rgba(115, 115, 128, 1)" />
      </div>
    </header>
  );
}
