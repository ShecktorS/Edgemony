import { useState, useEffect } from "react";
import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ setModalVisible, setImageModal }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data.products));
  }, []);

  return (
    <div className="ListProducts">
      {console.log(productsData)}
      {productsData
        .filter((product) => product.id <= 10)
        .map((product) => (
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
