import React, { useState } from "react";
import "./gallery.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.webp";
import img4 from "./img/4.jpg";
import img5 from "./img/6.jpg";
import { IoIosClose } from "react-icons/io";
import Footer from "../Footer/Footer";

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [imageDiensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
  ];

  const getImg = (imgSrc) => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <div className="gallery-img">
        <div className="overlay"></div>
        <div className="gallery-content">
          <h1 className="media-topic">Media & Gallery</h1>
          <p className="media-para">
            Check out the vibrant and exciting events in IEEE Computer Society
            SLIIT
          </p>
        </div>
      </div>
      <br></br>
      <div className={model ? "model open" : "model"}>
        <img
          src={tempimgSrc}
          style={{
            maxWidth: "80%",
            maxHeight: "80vh",
            padding: "10px",
          }}
          alt="Photos Open"
        />
        <IoIosClose className="iconcls" onClick={() => setModel(false)} />
      </div>
      <div className="gallery-photos">
        <div className="gallery-photos-container">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  className="gl-im"
                  style={{ width: "100%" }}
                  alt="Model Photos"
                />
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Gallery;
