import "./index.css";

const ImgWrapper = ({ setModalVisible, imageModal }) => {
  return (
    <div className="ImgWrapper">
      <div className="overlay" onClick={() => setModalVisible(false)}></div>
      <img src={imageModal} alt="Immagine prodotto" className="productImg" />
    </div>
  );
};

export default ImgWrapper;
