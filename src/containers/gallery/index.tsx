import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "react-photo-gallery";
import demoPhotos from "./demoPhotos";
import { DataProfile } from "data-access";
import "./gallery.scss";

export default (props: any) => {
  const [statePhotos, setPhotos] = useState<any[]>([]);
  console.log(props);

  useEffect(() => {
    fetchData();
  }, [props.reFetchPage]);

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
          height: Math.floor(Math.random() * 4) + 1,
          width: 4,
        };
      });

    console.log(finalPhotos);
    setPhotos(finalPhotos);
  };

  function calculateSection() {
    return statePhotos.map((photo, i) => {
      return (
        <section className="gallery">
          {statePhotos.slice(i * 14, i * 14 + 14).map((photo, index) => (
            <figure className={`gallery__item gallery__item--${index + 1}`}>
              <img
                src={photo.src}
                alt="Gallery image 1"
                className="gallery__img"
              />
            </figure>
          ))}
        </section>
      );
    });
  }

  if (!statePhotos.length) {
    return <div>Loading</div>;
  }
  return (
    <div>{calculateSection()}</div>

    // <section className="gallery">
    //   {statePhotos.map((photo, index) => {
    //     return (
    //       <figure className={`gallery__item gallery__item--${index + 1}`}>
    //         <img
    //           src={photo.src}
    //           alt="Gallery image 1"
    //           className="gallery__img"
    //         />
    //       </figure>
    //     );
    //   })}
    // </section>
  );
};
