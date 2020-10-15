import React, { useEffect, useState } from "react";
import ImageMasonry from "react-image-masonry";
import axios from "axios";

export default function Gallery() {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/photo", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg3MmI1YTJiOTYyYzI1NjliODUwMDAiLCJpYXQiOjE2MDI3NzE4NzB9.5aAxzzNGllLK33U5-41u8iQLF-Jz1dsiKCmaHVnrHJw",
        },
      })
      .then(
        (res) => {
          console.log(res);
          setPhotos([...photos, ...res.data.data.listPhotos]);
        },
        (err) => console.log(err)
      );
  }, []);
  return <ImageMasonry imageUrls={photos} numCols={3} />;
}
