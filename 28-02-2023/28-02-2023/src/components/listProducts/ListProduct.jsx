import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ listData, setModalVisible, setImageModal }) => {
  return (
    <div className="ListProducts">
      {listData.map((product) => (
        <CardProduct
          productData={product}
          key={product.id}
          setModalVisible={setModalVisible}
          setImageModal={setImageModal}
        />
      ))}
    </div>
  );
};

export default ListProducts;
