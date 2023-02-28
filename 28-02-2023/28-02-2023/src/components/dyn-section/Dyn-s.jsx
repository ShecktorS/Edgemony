import "./dyn-s.css";

const DynS = ({ testo, prova }) => {
  return (
    <div className="DynS">
      <h1>Attenzione... Contenuto altamente dinamico</h1>
      <p>{testo}</p>
      <p>{prova}</p>
    </div>
  );
};

export default DynS;
