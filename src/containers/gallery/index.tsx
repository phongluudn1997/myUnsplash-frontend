import React, { useEffect, useState } from "react";
import { DataProfile } from "data-access";
import "./gallery.scss";
import Masonry from "react-masonry-css";

export default (props: any) => {
  const [statePhotos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [props.reFetchPage]);

  const fetchData = async function () {
    const res = await DataProfile.Get("/photos");
    const { photos } = res.data.data;
    setPhotos([...photos, ...statePhotos]);
  };

  console.log(statePhotos);
  if (!statePhotos) {
    return "Loading...";
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {statePhotos.map((photo) => (
        <div style={{ borderRadius: 12, overflow: "hidden" }}>
          <img src={photo.url} alt="photo" />
        </div>
      ))}
    </Masonry>
  );
};
