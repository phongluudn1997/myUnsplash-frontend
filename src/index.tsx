import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.scss";
import "./styles/index.scss";
import App from "./containers/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
