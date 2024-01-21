import React, { useState } from "react";

const data = [
  "https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702166400&semt=ais",
  "https://e0.pxfuel.com/wallpapers/212/412/desktop-wallpaper-shrine-background-shrine-resurrection.jpg",
  "https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg",
];

const Carousel = () => {
  const [img, setimage] = useState(0);

  const handlePrev = () => {
    setimage(!img ? data.length - 1 : img - 1);
    if (img === 0) setimage(data.length - 1);
    else setimage(img - 1);
  };

  const handleNext = () => {
    setimage((img + 1) % data.length);
  };
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img src={data[img]} alt="" style={{ height: "300px", width: "300px" }} />
      <button onClick={handleNext}>Next</button>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        eligendi et totam natus error quos ad incidunt! Debitis, dolorum
        obcaecati corrupti deserunt totam placeat repellendus asperiores sunt
        quibusdam provident laudantium voluptatum, est quisquam! Porro
        accusantium et repellendus ducimus eaque magnam dolore quas repudiandae
        sit molestias, quam fugit, error iste praesentium assumenda numquam sed,
        cumque accusamus? Voluptatibus quis vel numquam! Labore obcaecati
        dolores, quam amet optio ducimus voluptatum voluptate repellendus enim
        modi. Sunt ullam atque magni nisi, natus a illo vel ad ab labore velit
        error aut possimus optio? Laborum, adipisci sed ea tenetur quod iste
        pariatur illum sapiente molestiae corrupti.
      </h1>
    </div>
  );
};

export default Carousel;
