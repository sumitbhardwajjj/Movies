import React from 'react'
import '../styles/Movies.css'

const Movies = () => {
  return (
    <div>
       <div className="wrappe">
      <div className="horizontal-scroll">
      <div className="content-item">
        <div className="item-card">
          <img
            src="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg"
            alt=""
          />
        </div>
        <div className="item-card">
          <img
            src="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg"
            alt=""
          />
        </div>
        <div className="item-card">
          <img
            src="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
     </div>
    </div>
  )
}

export default Movies
