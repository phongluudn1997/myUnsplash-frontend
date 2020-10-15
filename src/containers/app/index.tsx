import React from "react";
import ImageMasonry from "react-image-masonry";

const App = () => (
  <div className="App">
    <ImageMasonry
      imageUrls={[
        "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif",
        "https://media.giphy.com/media/KI9oNS4JBemyI/giphy.gif",
      ]}
      numCols={3}
    />
  </div>
);

export default App;
