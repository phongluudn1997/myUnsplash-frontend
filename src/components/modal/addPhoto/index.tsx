import React, { SyntheticEvent, useState } from "react";
import { DataProfile } from "../../../data-access";
import styles from "./styles.module.scss";

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
    }).then((res) => {
      console.log(res);
      setVisible(false);
    });
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["modal"]}>
      <div className={styles["body"]}>
        <div>
          <input
            className={styles["label"]}
            type="text"
            name="label"
            id="label"
            onChange={(e) => setLabel(e.target.value)}
            required
            placeholder="How do you name this picture?"
          />
          <input
            required
            type="file"
            accept="image/gif, image/png, image/jpg"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className={styles["footer"]}>
        <span onClick={() => setVisible(false)} className={styles["secondary"]}>
          Cancel
        </span>
        <button className={styles["primary"]} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddModal;
