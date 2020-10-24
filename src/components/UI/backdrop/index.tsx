import React from "react";

import styles from "./styles.module.scss";

export default ({ onClick }: any) => {
  return <div onClick={onClick} className={styles["backdrop"]}></div>;
};
