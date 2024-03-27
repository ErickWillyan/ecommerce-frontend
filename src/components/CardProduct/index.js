import style from "./style.module.css";

export function CardProduct(props) {
  function clicou() {
    alert(props.id);
  }
  return (
    <button onClick={clicou} className={style.cardProduct}>
      <img src="camiseta.jpg" width={256} height={300} />
      <div className={style.cardText}>
        <p>{props.name}</p>
        <hr className={style.lineCard} />
        <p className={style.price}>R$ {props.price}</p>
      </div>
    </button>
  );
}
