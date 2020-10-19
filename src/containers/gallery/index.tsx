import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../nav";
import Gallery from "react-photo-gallery";
import demoPhotos from "./demoPhotos";
import AddModal from "./addModal";

export default (props: any) => {
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
      <Gallery photos={demoPhotos} margin={12} columns={3} direction="column" />
    </div>
  );
};
