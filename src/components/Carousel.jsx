import React, { useState, useEffect } from "react";

const data = [
  "https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702166400&semt=ais",
  "https://e0.pxfuel.com/wallpapers/212/412/desktop-wallpaper-shrine-background-shrine-resurrection.jpg",
  "https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg",
];

const Carousel = () => {
  const [img, setimage] = useState(0);

  const handlePrev = () => {
    setimage((img - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setimage((img + 1) % data.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run the effect whenever 'img' changes

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <div style={{ maxWidth: "100%", height: "auto" }}>
  <img src={data[img]} alt="" style={{ width: "100%", height: "100%" }} />
</div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
