import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "react-photo-gallery";
import demoPhotos from "./demoPhotos";
import AddModal from "./addModal";
import { DataProfile } from "data-access";

export default (props: any) => {
  const [statePhotos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async function () {
      const res = await DataProfile.Get("/photos");
      const { photos } = res.data.data;

      const finalPhotos = photos
        .filter((photo: any) => {
          return photo.url;
        })
        .map((photo: any) => {
          return {
            src: photo.url,
            height: 3,
            width: 4,
          };
        });

      setPhotos(finalPhotos);
      console.log(statePhotos);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-lg">
      <Gallery
        photos={statePhotos}
        margin={12}
        columns={3}
        direction="column"
      />
    </div>
  );
};
