import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import Login from "../auth/login";
import Gallery from "../gallery";

const App = () => {
  const [isAuthen, setAuthen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthen(true);
    }
  }, [isAuthen]);
  return (
    <div className={styles["app"]}>
      {isAuthen ? (
        <Gallery setAuthen={setAuthen} />
      ) : (
        <Login setAuthen={setAuthen} />
      )}
    </div>
  );
};

export default App;
