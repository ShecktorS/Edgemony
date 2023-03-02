import "./index.css";

const ImgWrapper = ({ productsList, setModalVisible }) => {
  return (
    <div className="ImgWrapper">
      <div className="overlay" onClick={() => setModalVisible(false)}></div>
      <img src="#" alt="Immagine prodotto" className="productImg" />
    </div>
  );
};

export default ImgWrapper;
