import React, { SyntheticEvent, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { Redirect, withRouter } from "react-router";
import { useAuth } from "context/auth";
import { useClickOutside } from "hooks";

const Avatar = (props: any) => {
  const { setAuthToken } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropDownRef: any = useRef();

  useClickOutside(dropDownRef, () => setDropdownVisible(false));

  const handleClick = () => {
    props.history.push("/login");
    setAuthToken("");
  };

  const handleClickDropdown = (e: SyntheticEvent) => {
    setDropdownVisible((isDropdownVisible) => !isDropdownVisible);
  };

  return (
    <div className={styles["dropdown-container"]}>
      <button>
        <img
          onClick={handleClickDropdown}
          src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
          alt="Avatar"
          className="rounded-full h-10"
        />
      </button>
      {isDropdownVisible && (
        <div ref={dropDownRef} className={styles["dropdown-content"]}>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Avatar);
