import { productsList } from "./mocks/productList";
import { useState } from "react";
import "./main.css";
import Header from "./components/header";
import DynS from "./components/dyn-section";
import Footer from "./components/footer";
// Per lezione di 01-03-2023
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts";
import Gallery from "./components/gallery";
import PersonalTitle from "./components/personalTitle";
// Per lezione di 02-03-2023
import ImgWrapper from "./components/image-wrapper";

const Main = () => {
  // Dark Mode = DM
  const [isDMEnable, setDM] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const prova = { welcomeMsg: "Buongiorno a tutti i pazzi" };
  return (
    <div className={`Main ${isDMEnable && "DM"} `}>
      <Header />
      <Hero title="Store" />
      <Gallery />
      <Control listDataLength={productsList.length} />
      <PersonalTitle textContent={"La nostra lista dei prodotti"} />
      <ListProducts listData={productsList} setModalVisible={setModalVisible} />
      <DynS
        testo="Prova" /* Inserisci qui il testo da visualizzare */
        prova={prova.welcomeMsg}
      />

      <Footer />

      <button
        className="darkMode"
        onClick={() => {
          setDM((prev) => !prev);
        }}
      >
        {isDMEnable ? "☀️" : "🌔"}
      </button>
      {isModalVisible && (
        <ImgWrapper
          setModalVisible={setModalVisible}
          productsList={productsList}
        />
      )}
    </div>
  );
};

export default Main;
