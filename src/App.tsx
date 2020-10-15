import React from "react";
import style from "./App.module.scss";

const App = () => (
  <div className="App">
    <div
      className={style["grid"]}
      data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 160 }'
    >
      <div className={style["grid-item"]}></div>
      <div className="grid-item grid-item--width2 grid-item--height2"></div>
      <div className={style["grid-item--height3"]}></div>
      <div className="grid-item grid-item--height2"></div>
      <div className="grid-item grid-item--width3"></div>
    </div>
  </div>
);

export default App;
