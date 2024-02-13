import React,{useState} from "react";
import "../styles/Home.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const HorizontalScroll = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex);
  }

  const handleNext = () => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex);
  };

  const maxIndex = 2;

  return (
     <div className="wrap">
      <div className="horizontal-scroll-container">
      <div className="content" style={{ transform: `translateX(-${currentIndex * 32}%)` }}>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvYJs_91bg4gAYfcquyD49xNwPUDKsXL_xQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/5041/1405041-v-3f9a1366bf49"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvYJs_91bg4gAYfcquyD49xNwPUDKsXL_xQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/5041/1405041-v-3f9a1366bf49"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvYJs_91bg4gAYfcquyD49xNwPUDKsXL_xQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvYJs_91bg4gAYfcquyD49xNwPUDKsXL_xQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvYJs_91bg4gAYfcquyD49xNwPUDKsXL_xQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvYJs_91bg4gAYfcquyD49xNwPUDKsXL_xQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div style={{ display: currentIndex === maxIndex ? "block" : "none" }} onClick={handlePrev}>
          <ArrowBackIosIcon className="left-arrow" />
        </div>
      <div style={{ display: currentIndex < maxIndex ? "block" : "none" }} onClick={handleNext}>
          <ArrowForwardIosIcon className="right-arrow" />
        </div>
    </div>
     </div>
  );
};

export default HorizontalScroll;
