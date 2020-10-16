import React from "react";
import styles from "./styles.module.scss";

const Button = (props: any) => {
  return <button className={styles["button"]}>{props.children}</button>;
};

export default Button;
