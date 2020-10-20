import React, { SyntheticEvent, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import Modal, { AddModal } from "components/modal";
import logo from "assets/images/unsplash.svg";

const NavBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <header>
        <nav className={styles["nav"]}>
          <div className={styles["left"]}>
            <img src={logo} alt="" />
            <div className="w-full ml-16">
              <form
                onSubmit={handleSubmit}
                className={`${styles["search-form"]} bg-gray-100`}
              >
                <button className={styles["form-button"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 16, height: 16 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <input
                  placeholder="Search photos"
                  className={styles["search-input"]}
                  type="text"
                />
                <button
                  id="closing-button"
                  className={`${styles["form-button"]} ${styles["closing-button"]}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ width: 16, height: 16 }}
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
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
