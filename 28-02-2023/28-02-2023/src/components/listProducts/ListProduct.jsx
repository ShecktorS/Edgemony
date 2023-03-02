import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ listData, setModalVisible }) => {
  return (
    <div className="ListProducts">
      {listData.map((product) => (
        <CardProduct
          productData={product}
          key={product.id}
          setModalVisible={setModalVisible}
        />
      ))}
    </div>
  );
};

export default ListProducts;
