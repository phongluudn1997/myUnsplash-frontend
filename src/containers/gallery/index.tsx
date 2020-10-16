import React, { useEffect, useState } from "react";
import ImageMasonry from "react-image-masonry";
import axios from "axios";
import styles from "./styles.module.scss";
import NavBar from "../nav";

type Props = any;

const Gallery: React.FC<Props> = (props) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleClick = () => {
    console.log("click");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/photo", {
        headers: {
          Authorization: token,
        },
      })
      .then(
        (res) => {
          setPhotos([...photos, ...res.data.data.listPhotos]);
        },
        (err) => {
          console.log(err.response);
          if (err.response.status === 401) {
            props.setAuthen(false);
          }
        }
      );
  }, []);
  return (
    <div className="mt-lg">
      <NavBar />
      <ImageMasonry
        imageUrls={photos}
        numCols={3}
        animate={true}
        className={`${styles["gallery"]}`}
      />
    </div>
  );
};

export default Gallery;
