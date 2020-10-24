import React, { SyntheticEvent, useState } from "react";
import styles from "./styles.module.scss";
// import Modal, { AddModal } from "components/modal";
import logo from "assets/images/unsplash.svg";
import { Link } from "react-router-dom";
import Avatar from "./avatar";
import { useAuth } from "context/auth";
import Modal from "../../components/UI/modal";
import AddModal from "./addPhoto";

const NavBar = ({ setRefetchPage }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const { token } = useAuth();

  return (
    <div>
      <header>
        <nav className={styles["nav"]}>
          <div className={styles["left"]}>
            <img className={styles["logo"]} src={logo} alt="" />
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className={`${styles["search-form"]} bg-gray-100`}
              >
                <button type="submit" className={styles["form-button"]}>
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
          <div className={styles["button-lists"]}>
            <button
              className="border border-gray-300 border-solid px-2 py-1 focus:outline-none rounded text-gray-600"
              onClick={() => setModalVisible(true)}
            >
              Add a photo
            </button>
            {token ? (
              <Avatar />
            ) : (
              <>
                <Link to="/login">
                  <button className="ml-6 text-gray-600 px-2 py-1 focus:outline-none">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="ml-2 bg-green-500 text-white px-2 py-1 rounded focus:outline-none">
                    Join free
                  </button>
                </Link>{" "}
              </>
            )}
          </div>
        </nav>
      </header>

      <Modal
        isShow={isModalVisible}
        onClickOutside={() => setModalVisible(false)}
      >
        <AddModal
          setVisible={setModalVisible}
          setRefetchPage={setRefetchPage}
        />
      </Modal>
    </div>
  );
};

export default NavBar;
