import { useRouter } from "next/router";
import style from "./style.module.css";

export function CardProduct(props) {
  const router = useRouter();
  function HandleNavigationDetailProduct() {
    router.push({
      pathname: "/detailProduct",
      query: {
        name: props.data.name,
        description: props.data.description,
        image: props.data.image,
        category: props.data.category.name,
        price: props.data.price,
      },
    });
  }

  return (
    <button
      onClick={HandleNavigationDetailProduct}
      className={style.cardProduct}
    >
      <img src={`../${props.data.image}`} width={256} height={300} />
      <div className={style.cardText}>
        <div className={style.textDiv}>
          <p>{props.data.name}</p>
        </div>
        <hr className={style.lineCard} />
        <div className={style.textDiv}>
          <p className={style.price}>R$ {props.data.price}</p>
        </div>
      </div>
    </button>
  );
}
