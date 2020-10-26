import React from "react";
import style from "./style.module.scss";

const container = (props) => {
  return <div className={style["container"]}>{props.children}</div>;
};

export default container;
