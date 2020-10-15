import React, { useEffect, useState } from "react";
import ImageMasonry from "react-image-masonry";
import axios from "axios";

export default function Gallery() {
  const [photos, setPhotos] = useState<string[]>([]);

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
          console.log(res);
          setPhotos([...photos, ...res.data.data.listPhotos]);
        },
        (err) => {
          console.log(err.statusCode);
        }
      );
  }, []);
  return <ImageMasonry imageUrls={photos} numCols={3} />;
}
