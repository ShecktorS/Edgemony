import { imagesURL } from "../../mocks/imgUrl";
import PersonalTitle from "../personalTitle";
import "./index.css";

const Gallery = () => {
  return (
    <div className="Gallery">
      <PersonalTitle textContent={"Galleria!"} />

      <div className="imgGallery">
        <img src={imagesURL[0]} alt="1 image gallery" />
        <img src={imagesURL[1]} alt="2 image gallery" />
        <img src={imagesURL[2]} alt="3 image gallery" />
        <img src={imagesURL[3]} alt="4 image gallery" />
      </div>
    </div>
  );
};

export default Gallery;
