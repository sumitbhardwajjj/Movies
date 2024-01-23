import React, { useState, useEffect } from "react";
import '../styles/Movies.css'

const data = [
  "https://www.koimoi.com/wp-content/new-galleries/2023/01/highest-grossing-hollywood-films-at-the-worldwide-box-office-01.jpg?width=1000",
  "https://www.koimoi.com/wp-content/new-galleries/2022/02/spider-man-no-way-home-has-finally-taken-avatars-position-as-the-3rd-highest-grossing-film-off-time-in-the-us-001.jpg?w=1000"
];


const Movies = () => {

  const [img, setimage] = useState(0);

  const handleNext = () => {
    setimage((img + 1) % data.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [img]); // Run the effect whenever 'img' changes


  return (
    <div className='wrappe'>
     <div className="item-card">
     <img src={data[img]} alt=""  />
     <img src="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg" alt="" />
     </div>
    </div>
  )
}

export default Movies
