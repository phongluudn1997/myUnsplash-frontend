import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import Modal, { AddModal } from "components/modal";
import logo from "assets/images/unsplash.svg";

const NavBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <header>
        <nav className={styles["nav"]}>
          <div className={styles["left"]}>
            <img src={logo} alt="" />
            <div className={styles["input-container"]}>
              <input
                placeholder="Search by name"
                className={styles["input-field"]}
                type="text"
              />
            </div>
          </div>
          <div>
            <Button onClick={() => setModalVisible(true)}>Add a photo</Button>
          </div>
        </nav>
      </header>

      {isModalVisible ? (
        <Modal>
          <AddModal setVisible={setModalVisible} />
        </Modal>
      ) : null}
    </div>
  );
};

export default NavBar;
