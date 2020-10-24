import React from "react";
import Backdrop from "../backdrop";
import styles from "./styles.module.scss";

const Modal = (props: any) => {
  const { isShow, children, onClickOutside } = props;
  return isShow ? (
    <>
      <Backdrop onClick={onClickOutside} />
      <div className={styles["modal"]}>{children}</div>
    </>
  ) : null;
};

export default Modal;
