import "../styles/globals.css";
import { ProductsProvider } from "../contexts/products";

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />;
    </ProductsProvider>
  );
}
