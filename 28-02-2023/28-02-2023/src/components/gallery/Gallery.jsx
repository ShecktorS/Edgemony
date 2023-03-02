import { useState } from "react";
import { imagesURL } from "../../mocks/imgUrl";
import PersonalTitle from "../personalTitle";
import "./index.css";

const Gallery = () => {
  const [galleryImg, setGalleryImg] = useState(0);
  const changeImg = (img) => setGalleryImg(img);

  return (
    <div className="Gallery">
      <PersonalTitle textContent={"Galleria!"} />
      <div className="imgGallery">
        <p>{galleryImg + 1}° foto</p>
        <img src={imagesURL[galleryImg]} alt="gallery" />
        <div className="point">
          <div onClick={() => changeImg(0)}></div>
          <div onClick={() => changeImg(1)}></div>
          <div onClick={() => changeImg(2)}></div>
          <div onClick={() => changeImg(3)}></div>
        </div>
        <div className="LR_Btns">
          <div
            className={`leftBtn ${galleryImg < 1 && "disabled"}`}
            onClick={() => {
              galleryImg > 0 && setGalleryImg(galleryImg - 1);
            }}
          >
            ←
          </div>
          <div
            className={`rightBtn ${galleryImg > 2 && "disabled"}`}
            onClick={() => {
              galleryImg < 3 && setGalleryImg(galleryImg + 1);
            }}
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
