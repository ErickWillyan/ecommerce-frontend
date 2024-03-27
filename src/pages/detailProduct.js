import { useRouter } from "next/router";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { Header } from "../components/Header";
import style from "@/styles/detailProduct.module.css";

export default function DetailProduct() {
  const router = useRouter();
  const { name, description, image, category, price } = router.query;
  console.log(name);

  function buttonBack() {
    router.push("/");
  }

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <div onClick={buttonBack} className={style.buttonVoltar}>
          <p className={style.voltarText}>
            <IoArrowBackCircleOutline
              className={style.icone}
              size={18}
              color="rgba(97, 116, 128, 1)"
            />
            Voltar
          </p>
        </div>
        <div className={style.container}>
          <img c src={`../${image}`} width={580} height={520} />
          <div className={style.productsContainer}>
            <div>
              <p>{category}</p>
              <h1>{name}</h1>
              <p className={style.priceText}>R$ {price}</p>
              <p className={style.freteText}>{description}</p>
            </div>
            <div className={style.containerDescription}>
              <p>DESCRIÇÃO</p>
              <p>
                Aqui vem um texto descritivo do produto, esta caixa de texto
                servirá apenas de exemplo para que simule algum texto que venha
                a ser inserido nesse campo, descrevendo tal produto.
              </p>
              <div />
            </div>
            <button>
              <FiShoppingBag size={24} color="#fff" className={style.icone} />
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
