import React, { useEffect, useState } from "react";

import Login from "../auth/login";
import Gallery from "../gallery";

const App = () => {
  const [isAuthen, setAuthen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthen(true);
    }
  }, []);
  return <div className="App">{isAuthen ? <Gallery /> : <Login />}</div>;
};

export default App;
