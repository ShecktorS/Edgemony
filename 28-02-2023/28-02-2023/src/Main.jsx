import { productsList } from "./mocks/productList";
import "./main.css";
import Header from "./components/header";
import DynS from "./components/dyn-section";
import Footer from "./components/footer";
// Per lezione di 01-02-2023
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts";
import Gallery from "./components/gallery";
import PersonalTitle from "./components/personalTitle";

const Main = () => {
  const prova = { welcomeMsg: "Buongiorno a tutti i pazzi" };
  return (
    <div className="Main">
      <Header />
      <Hero title="Store" />
      <Gallery />
      <Control listDataLength={productsList.length} />
      <PersonalTitle textContent={"La nostra lista dei prodotti"} />
      <ListProducts listData={productsList} />
      <DynS
        testo="Prova" /* Inserisci qui il testo da visualizzare */
        prova={prova.welcomeMsg}
      />

      <Footer />
    </div>
  );
};

export default Main;
