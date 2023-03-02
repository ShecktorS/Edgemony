import Button from "../button";
import "./index.css";

const CardProduct = ({ productData, setModalVisible, setImageModal }) => {
  const onGetStock = () =>
    alert(`Ci sono ${productData.stock} prodotti disponibili`);

  const onImageClick = () => {
    setModalVisible(true);
    setImageModal(productData.images[0]);
  };

  return (
    <div
      className="CardProduct"
      style={{
        backgroundColor: `rgba(${
          12 * productData.discountPercentage
        }, 10, 4, 0.4`,
      }}
    >
      <img src={productData.thumbnail} alt="Apple" onClick={onImageClick} />
      <div className="CardProduct__text-content">
        <h4>{productData.title}</h4>
        <p>{productData.description}</p>
        <p>{productData.price} €</p>
        <hr />
        <p>{productData.brand}</p>
        <p>Sconto del {productData.discountPercentage}%</p>
        <Button text="Disponibilità" clickFunc={onGetStock} />
      </div>
    </div>
  );
};

export default CardProduct;
