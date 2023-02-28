import "./main.css";
import Header from "./components/header";
import DynS from "./components/dyn-section";
import Footer from "./components/footer";

const Main = () => {
  const prova = { welcomeMsg: "Buongiorno a tutti i pazzi" };
  return (
    <div className="Main">
      {<Header />}
      {
        <DynS
          testo="Prova" /* Inserisci qui il testo da visualizzare */
          prova={prova.welcomeMsg}
        />
      }
      {<Footer />}
    </div>
  );
};

export default Main;
