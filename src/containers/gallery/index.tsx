import React, { useEffect, useState } from "react";
import ImageMasonry from "react-image-masonry";

export default function Gallery() {
  const [photos, setPhotos] = useState<string[]>([]);
  useEffect(() => {
    setPhotos([
      ...photos,
      "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif",
      "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif",
      "https://www.w3schools.com/howto/img_snow.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6fEFQ2VOkoj6OT9z6--bmfcPqiGbJWcCJOg&usqp=CAU",
    ]);
  }, []);
  return <ImageMasonry imageUrls={photos} numCols={3} />;
}
