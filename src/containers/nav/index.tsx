import React from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";

const NavBar = () => {
  return (
    <header>
      <nav className={styles["nav"]}>
        <div className={styles["left"]}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Eramet_Logotype.png"
            alt=""
          />
          <div className={styles["input-container"]}>
            <input
              placeholder="Search by name"
              className={styles["input-field"]}
              type="text"
            />
          </div>
        </div>
        <div>
          <Button>Add a photo</Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
