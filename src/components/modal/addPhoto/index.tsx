import React, { SyntheticEvent, useState } from "react";
import { DataProfile } from "../../../data-access";

type Props = {
  setVisible: Function;
};

const AddModal = ({ setVisible }: Props) => {
  const [label, setLabel] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("label", label);
    data.append("photo", file || "");
    DataProfile.Post("/photo", {
      data,
      headers: { Authorization: window.localStorage.getItem("token") },
    }).then((res) => {
      console.log(res);
      setVisible(false);
    });
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="label">Label</label>
      <input
        type="text"
        name="label"
        id="label"
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        type="file"
        accept="image/gif, image/png, image/jpg"
        onChange={handleFileChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddModal;
