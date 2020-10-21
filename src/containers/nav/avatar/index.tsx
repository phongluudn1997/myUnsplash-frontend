import React from "react";
import styles from "./styles.module.scss";
import { Redirect, withRouter } from "react-router";
import { useAuth } from "context/auth";

const Avatar = (props: any) => {
  const { setAuthToken } = useAuth();

  const handleClick = () => {
    props.history.push("/login");
    setAuthToken("");
  };
  return (
    <div className={styles["dropdown-container"]}>
      <img
        src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
        alt="Avatar"
        className="rounded-full h-10"
      />
      <div className={styles["dropdown-content"]}>
        <button onClick={handleClick}>Log out</button>
      </div>
    </div>
  );
};

export default withRouter(Avatar);
